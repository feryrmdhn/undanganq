// ================== BACKEND API UCAPAN ==================
//   GET  /api/wishes?limit=100  -> daftar ucapan terbaru
//   POST /api/wishes {name, message} -> simpan ucapan
// Jalankan: node server.js  (atau npm start)

const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

(function loadEnv() {
    try {
        const raw = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
        for (const line of raw.split(/\r?\n/)) {
            const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.+?)\s*$/);
            if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
        }
    } catch (e) {
        console.warn('.env tidak ditemukan, pastikan MYSQL_URL_STRING sudah di-set');
    }
})();

if (!process.env.MYSQL_URL_STRING) {
    console.error('MYSQL_URL_STRING belum di-set di .env');
    process.exit(1);
}

const pool = mysql.createPool({
    uri: process.env.MYSQL_URL_STRING,
    waitForConnections: true,
    connectionLimit: 5,
    timezone: '+07:00'
});

function json(res, status, data) {
    res.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(JSON.stringify(data));
}

function readBody(req) {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', (c) => { body += c; });
        req.on('end', () => resolve(body));
        req.on('error', () => resolve(''));
    });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'OPTIONS') return json(res, 204, {});

    if (req.method === 'GET' && url.pathname === '/api/wishes') {
        try {
            const limit = Math.min(parseInt(url.searchParams.get('limit'), 10) || 100, 200);
            const [rows] = await pool.query(
                'SELECT id, guest_name, message, created_at FROM wishes ORDER BY id DESC LIMIT ?',
                [limit]
            );
            return json(res, 200, { success: true, data: rows });
        } catch (err) {
            return json(res, 500, { success: false, error: String(err.message || err) });
        }
    }

    if (req.method === 'POST' && url.pathname === '/api/wishes') {
        try {
            let body = {};
            try { body = JSON.parse((await readBody(req)) || '{}'); } catch (e) { }
            const name = String(body.name || '').trim().slice(0, 100);
            const message = String(body.message || '').trim().slice(0, 500);
            if (!name || !message) {
                return json(res, 400, { success: false, error: 'name dan message wajib diisi' });
            }
            const [result] = await pool.execute(
                'INSERT INTO wishes (guest_name, message) VALUES (?, ?)',
                [name, message]
            );
            return json(res, 200, { success: true, data: { id: result.insertId } });
        } catch (err) {
            return json(res, 500, { success: false, error: String(err.message || err) });
        }
    }

    return json(res, 404, { success: false, error: 'not found' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('API ucapan jalan di http://localhost:' + PORT);
});
