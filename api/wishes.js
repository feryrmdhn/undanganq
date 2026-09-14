// API ucapan sebagai Vercel serverless function
// Endpoint: https://fery-fitri.online/api/wishes
// Set env MYSQL_URL_STRING di Vercel Project Settings -> Environment Variables

const mysql = require('mysql2/promise');

let pool = null;

function getPool() {
    if (!pool) {
        if (!process.env.MYSQL_URL_STRING) {
            throw new Error('MYSQL_URL_STRING belum di-set di environment Vercel');
        }
        pool = mysql.createPool({
            uri: process.env.MYSQL_URL_STRING,
            connectionLimit: 3,
            timezone: '+07:00'
        });
    }
    return pool;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(204).end();

    if (req.method === 'GET') {
        try {
            const limit = Math.min(parseInt(req.query && req.query.limit, 10) || 100, 200);
            const [rows] = await getPool().query(
                'SELECT id, guest_name, message, created_at FROM wishes ORDER BY id DESC LIMIT ?',
                [limit]
            );
            return res.status(200).json({ success: true, data: rows });
        } catch (err) {
            return res.status(500).json({ success: false, error: String(err.message || err) });
        }
    }

    if (req.method === 'POST') {
        try {
            const body = req.body || {};
            const name = String(body.name || '').trim().slice(0, 100);
            const message = String(body.message || '').trim().slice(0, 500);
            if (!name || !message) {
                return res.status(400).json({ success: false, error: 'name dan message wajib diisi' });
            }
            const [result] = await getPool().execute(
                'INSERT INTO wishes (guest_name, message) VALUES (?, ?)',
                [name, message]
            );
            return res.status(200).json({ success: true, data: { id: result.insertId } });
        } catch (err) {
            return res.status(500).json({ success: false, error: String(err.message || err) });
        }
    }

    return res.status(404).json({ success: false, error: 'not found' });
};
