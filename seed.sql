-- ================================================================
-- SEED TABEL UCAPAN — jalankan manual di MySQL (Railway)
-- Contoh via terminal: mysql "URL_STRING" < seed.sql
-- atau copy-paste lewat Query tab di dashboard Railway
-- ================================================================

CREATE TABLE IF NOT EXISTS wishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guest_name VARCHAR(100) NOT NULL,
    message VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Data awal (opsional, hapus blok ini jika ingin mulai kosong)
INSERT INTO wishes (guest_name, message, created_at) VALUES
('Ahmad Fauzi', 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.', NOW() - INTERVAL 3 HOUR),
('Siti Rahma', 'Barakallahu lakuma wa baraka alaikuma. Semoga lancar sampai hari bahagia!', NOW() - INTERVAL 2 HOUR),
('Budi Santoso', 'Turut berbahagia untuk kalian berdua. Sampai jumpa di acara pernikahannya!', NOW() - INTERVAL 90 MINUTE),
('Dewi Lestari', 'Congrats! Semoga menjadi pasangan yang saling menguatkan selamanya.', NOW() - INTERVAL 60 MINUTE),
('Rizky Pratama', 'Semoga pernikahan ini menjadi awal dari kebahagiaan yang tiada akhir.', NOW() - INTERVAL 45 MINUTE),
('Nurul Hidayah', 'Selamat tawwa! Semoga Allah selalu melimpahkan berkah dan rahmat-Nya untuk kalian.', NOW() - INTERVAL 30 MINUTE),
('Andi Saputra', 'Semoga menjadi pasangan yang saling mengerti, menyayangi, dan setia selamanya.', NOW() - INTERVAL 15 MINUTE),
('Rina Amelia', 'Selamat broo! Semoga rumah tangganya dipenuhi cinta dan tawa.', NOW() - INTERVAL 5 MINUTE);
