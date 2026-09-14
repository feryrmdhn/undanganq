// ================== DATA UNDANGAN (HARDCODE / FULL STATIS) ==================
// Ubah nilai di bawah ini untuk mengubah isi undangan. Tidak ada fetch API.
var FALLBACK_DATA = {
    guestName: 'Tamu Undangan',

    groomName: 'Fery Ramadhan Cahyono, S.Mat',
    groomWithoutTitle: 'Fery Ramadhan Cahyono',
    brideName: 'Fitriah Yunus',
    groomNickname: 'Fery',
    brideNickname: 'Fitri',
    groomRole: 'Putra dari',
    brideRole: 'Putri dari',
    fatherGroom: 'Bapak Dedy Tjahjono, SE & Ibu Riani Mansyur, SH',
    fatherBride: 'Bapak IPDA Purn. M. Yunus B & Ibu Hj. Nisriah B',
    groomPhoto: '_assets/img/spouse/man.JPG',
    bridePhoto: '_assets/img/spouse/woman.JPG',
    rsvpPhoto: '_assets/img/misc/rsvp.JPG',
    coverImage: '_assets/img/gallery/hero.JPG',

    akadDatetime: '2026-09-19T10:00:00',
    akadTime: 'Pukul 10.00 - 11.00 WITA',
    akadVenue: 'Gedung Sakrina - Politeknik Ilmu Pelayaran (PIP) Makassar',
    akadMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63577.426027639885!2d119.39864004318167!3d-5.169599087663428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf029fc6a3db09%3A0xb5737be7c1ec3a26!2sPoliteknik%20Ilmu%20Pelayaran%20Makassar!5e0!3m2!1sid!2sid!4v1789349424451!5m2!1sid!2sid',

    receptionDatetime: '2026-09-19T11:00:00',
    receptionTime: 'Pukul 11.00 - 14.00 WITA',
    receptionVenue: 'Gedung Sakrina - Politeknik Ilmu Pelayaran (PIP) Makassar',

    music: '_assets/music/music.mp3',

    payment: [
        { method: 'bca', value: '7970513561', name: 'Fery Ramadhan Cahyono' },
        { method: 'mandiri', value: '1520033349818', name: 'Fitriah Yunus' }
    ],

    platform: ' Dibuat oleh Fery'
};

// ================== UCAPAN: DUMMY + LOCALSTORAGE ==================
// Konsep: 35 ucapan dummy diacak setiap load. Ucapan user disimpan di
// localStorage, saat dikirim tampil di posisi teratas; pada kunjungan
// berikutnya diacak bersama dummy sehingga seolah "tenggelam" oleh ucapan lain.
var WISHES_STORAGE_KEY = 'undangan_fery_fitri_wishes';

var DUMMY_WISH_NAMES = [
    'Ahmad Fauzi', 'Siti Rahma', 'Budi Santoso', 'Dewi Lestari',
    'Rizky Pratama', 'Nurul Hidayah', 'Andi Saputra', 'Rina Amelia',
    'Bagus Wicaksono', 'Maya Sari', 'Fajar Nugroho', 'Intan Permata',
    'Hendra Gunawan', 'Lia Kartika', 'Yusuf Maulana', 'Salsabila Putri',
    'Dimas Aryo', 'Ayu Wulandari', 'Rendi Kusnadi', 'Fitri Handayani',
    'Galih Prasetyo', 'Nabila Zahra', 'Arif Rahman', 'Dinda Ayu',
    'Bayu Segara', 'Melati Rahayu', 'Ilham Ramadhan', 'Vina Oktaviani',
    'Reza Firmansyah', 'Tiara Anggraini', 'Wahyu Hidayat', 'Sri Mulyani',
    'Agus Setiawan', 'Ratna Dewi', 'Bram Aditya', 'Anisa Rahmawati',
    'Doni Prabowo', 'Kiki Amalia', 'Hasan Basri', 'Ulfa Zahira'
];

var DUMMY_WISH_MESSAGES = [
    'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
    'Barakallahu lakuma wa baraka alaikuma. Semoga lancar sampai hari bahagia!',
    'Turut berbahagia untuk kalian berdua. Sampai jumpa di acara pernikahannya!',
    'Congrats! Semoga menjadi pasangan yang saling menguatkan selamanya.',
    'Semoga pernikahan ini menjadi awal dari kebahagiaan yang tiada akhir.',
    'Selamat woooi! Semoga Allah selalu melimpahkan berkah dan rahmat-Nya untuk kalian.',
    'Bahagia selalu untuk kalian berdua. Lancar-lancar sampai akad ya!',
    'Wee temanku, semoga menjadi pasangan yang saling mengerti, menyayangi, dan setia selamanya.',
    'Alhamdulillah, akhirnya sampai di hari yang dinanti. Semoga langgeng selalu!',
    'Selamat menikah! Semoga rumah tangganya dipenuhi cinta dan tawa.',
    'We Turut berdoa semoga acaranya lancar dan menjadi keluarga yang harmonis.',
    'Semoga menjadi keluarga yang kuat, sabar, dan penuh berkah.',
    'Selamat cikaaa! Semoga dikaruniai kebahagiaan dunia akhirat.',
    'MasyaAllah, selamat tawwa! Semoga Allah mudahkan segala urusan kalian.',
    'Akhirnya resmi! Semoga komitmen ini dijaga sampai jannah-Nya.',
    'Semoga cinta kalian bertambah setiap hari, bukan sebaliknya. Aamiin.',
    'Selamat menempuh babak baru! Semoga rumah tangganya sehat dan cukup selalu.',
    'Doa terbaik dari kami berdua, semoga menjadi keluarga yang rukun dan bahagia.',
    'Semoga pernikahan ini dikaruniai keturunan yang sholeh dan sholehah.',
    'Selamat bro! Semoga saling melengkapi dalam suka maupun duka.',
    'Bahagia terus Fery & Fitri! Semoga menjadi pasangan yang bikin iri banyak orang (dalam hal baik).',
    'Semoga Allah pertemukan kalian dalam kebaikan dan pisahkan tidak, hingga akhir hayat.',
    'Selamat menikah tawwa! Semoga komunikasinya selalu baik, sayangnya selalu baru.',
    'Menerima bahtera rumah tangga bukanlah hal mudah, semoga Allah selalu membimbing kalian.',
    'Selamat untuk kalian berdua! Semoga Allah berkahi dan kumpulkan dalam kebaikan.',
    'Semoga hari pernikahan ini menjadi awal dari seribu kebahagiaan bersama.',
    'Selamat ya! Semoga menjadi pasangan yang sabar satu sama lain selamanya.',
    'Semoga lancar acara akad dan resepsinya, kami doakan yang terbaik untuk kalian.',
    'Turut berbahagia mas bro! Semoga rumah yang kalian bangun dipenuhi kehangatan.',
    'Selamat menempuh hidup baru, semoga kompak menghadapi segala tantangan.',
    'Semoga Allah jadikan kalian pasangan yang bermanfaat bagi keluarga dan orang sekitar.',
    'Selamat! Semoga cinta yang kalian rawat hari ini terus berbunga hingga nanti.',
    'Doa terbaik kami menyertai, semoga sakinah hingga usia senja.',
    'MasyaAllah, pernikahan adalah ibadah. Semoga istiqomah menjaganya.',
    'Selamat bosku! Semoga setiap tahun semakin sayang dan semakin kuat.'
];

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}

function generateDummyWishes(count) {
    var names = shuffleArray(DUMMY_WISH_NAMES.slice()).slice(0, count);
    var messages = shuffleArray(DUMMY_WISH_MESSAGES.slice());
    return names.map(function (name, i) {
        return { name: name, message: messages[i % messages.length] };
    });
}

function loadUserWishes() {
    try {
        var raw = localStorage.getItem(WISHES_STORAGE_KEY);
        var parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function saveUserWish(wish) {
    try {
        var list = loadUserWishes();
        list.push(wish);
        localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(list));
    } catch (e) { /* storage tidak tersedia — abaikan */ }
}

function buildWishes() {
    return shuffleArray(generateDummyWishes(40).concat(loadUserWishes()));
}

// ================== API UCAPAN (backend server.js + MySQL) ==================
// Otomatis: lokal (file:// / localhost) pakai server.js di port 3000,
// produksi (https) memanggil /api/wishes di domain yang sama (Vercel function).
var API_BASE = (window.location.protocol === 'https:' &&
    window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
    ? 'https://fery-fitri.online'
    : 'http://localhost:3000';

function apiGetWishes() {
    return fetch(API_BASE + '/api/wishes?limit=100')
        .then(function (r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        })
        .then(function (j) {
            if (!j || !j.success || !Array.isArray(j.data)) throw new Error('format respons salah');
            return j.data.map(function (w) {
                return { name: w.guest_name, message: w.message };
            });
        });
}

function apiPostWish(name, message) {
    return fetch(API_BASE + '/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, message: message })
    }).then(function (r) { return r.json(); });
}

FALLBACK_DATA.wishes = buildWishes();

// Ikon metode pembayaran lokal (bila metode tidak ada di daftar, tampil sebagai teks)
var PAYMENT_IMAGES = {
    bca: '_assets/img/icons/bca.png',
    mandiri: '_assets/img/icons/mandiri.png',
    bri: '_assets/img/icons/bri.webp'
};

// ================== RENDER ==================

function el(id) { return document.getElementById(id); }
function getPaymentImage(method) { return PAYMENT_IMAGES[method] || null; }

function applyData(data) {
    var d = data;
    var f = FALLBACK_DATA;
    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    if (el('guest')) el('guest').innerHTML = d.guestName ? sanitize(d.guestName) : f.guestName;
    if (el('groom-name-opening')) el('groom-name-opening').innerHTML = d.groomNickname || d.groomName || f.groomNickname || f.groomName;
    if (el('bride-name-opening')) el('bride-name-opening').innerHTML = d.brideNickname || d.brideName || f.brideNickname || f.brideName;
    if (el('groom-name-header')) el('groom-name-header').innerHTML = d.groomName || f.groomName;
    if (el('bride-name-header')) el('bride-name-header').innerHTML = d.brideName || f.brideName;
    if (el('groom-name')) el('groom-name').innerHTML = d.groomName || f.groomName;
    if (el('bride-name')) el('bride-name').innerHTML = d.brideName || f.brideName;
    if (el('groom-role')) el('groom-role').innerHTML = d.groomRole || f.groomRole;
    if (el('bride-role')) el('bride-role').innerHTML = d.brideRole || f.brideRole;
    if (el('father-groom')) el('father-groom').innerHTML = d.fatherGroom || f.fatherGroom || '';
    if (el('father-bride')) el('father-bride').innerHTML = d.fatherBride || f.fatherBride || '';
    if (el('groom-photo')) el('groom-photo').src = d.groomPhoto || f.groomPhoto;
    if (el('bride-photo')) el('bride-photo').src = d.bridePhoto || f.bridePhoto;
    if (el('rsvp-photo')) el('rsvp-photo').src = d.rsvpPhoto || f.rsvpPhoto;

    if (el('closing-couple')) el('closing-couple').innerHTML = (d.groomWithoutTitle || f.groomWithoutTitle) + '<br>&<br>' + (d.brideName || f.brideName);

    var akad = new Date(d.akadDatetime || f.akadDatetime);
    if (el('akad-date')) el('akad-date').innerHTML = days[akad.getDay()] + ', ' + akad.getDate() + ' ' + months[akad.getMonth()] + ' ' + akad.getFullYear();
    if (el('akad-time')) el('akad-time').innerHTML = d.akadTime || ('Pukul ' + akad.getHours().toString().padStart(2, '0') + '.' + akad.getMinutes().toString().padStart(2, '0') + ' WITA');
    if (el('akad-venue')) el('akad-venue').innerHTML = d.akadVenue || f.akadVenue;

    var recep = new Date(d.receptionDatetime || f.receptionDatetime);
    if (el('reception-date')) el('reception-date').innerHTML = days[recep.getDay()] + ', ' + recep.getDate() + ' ' + months[recep.getMonth()] + ' ' + recep.getFullYear();
    if (el('reception-time')) el('reception-time').innerHTML = d.receptionTime || ('Pukul ' + recep.getHours().toString().padStart(2, '0') + '.' + recep.getMinutes().toString().padStart(2, '0') + ' WITA');
    if (el('reception-venue')) el('reception-venue').innerHTML = d.receptionVenue || f.receptionVenue;

    if (el('save-the-date')) el('save-the-date').innerHTML = recep.getDate().toString().padStart(2, '0') + ' ' + months[recep.getMonth()] + ' ' + recep.getFullYear();
    if (el('header-date')) el('header-date').innerHTML = recep.getDate().toString().padStart(2, '0') + ' ' + months[recep.getMonth()] + ' ' + recep.getFullYear();

    function cleanMapsUrl(str) {
        if (!str) return '';

        var iframeMatch = String(str).match(/src=["']([^"']+)["']/);
        if (iframeMatch) {
            str = iframeMatch[1];
        }

        var textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        str = textarea.value;

        if (str.indexOf('/maps/embed') !== -1) {
            return str;
        }

        var coordMatch = str.match(/[\/@](-?\d+\.\d+),(-?\d+\.\d+)/) ||
            str.match(/3d(-?\d+\.\d+)[^!]*!4d(-?\d+\.\d+)/);
        if (coordMatch) {
            return 'https://maps.google.com/maps?q=' + coordMatch[1] + ',' + coordMatch[2] + '&output=embed';
        }

        if (str.indexOf('google.com/maps') !== -1 || str.indexOf('maps.google') !== -1) {
            if (str.indexOf('output=embed') === -1) {
                return str + (str.indexOf('?') !== -1 ? '&' : '?') + 'output=embed';
            }
        }

        return str;
    }

    var mapFrame = el('gmap_canvas');
    if (mapFrame) mapFrame.src = cleanMapsUrl(d.akadMapsUrl || f.akadMapsUrl) || '';

    timezz('#countdown-row', {
        date: recep,
        stop: false, canContinue: false, withYears: false,
        beforeCreate() { }, beforeDestroy() { }, update() { },
    });

    var music = d.music || f.music;
    var audioSource = document.querySelector('#audio source');
    if (audioSource && music) {
        audioSource.setAttribute('src', music);
        audioSource.parentElement.load();
    }

    var payment = (d.payment && d.payment.length) ? d.payment : f.payment;
    if (payment.length) renderPayment(payment);

    if (el('platform-name')) el('platform-name').innerHTML = d.platform || f.platform || 'Your platform';

    var coverImg = d.coverImage || f.coverImage;
    if (coverImg) {
        var openingSection = el('opening');
        if (openingSection) {
            openingSection.style.backgroundImage = "url('_assets/img/decoration/brush-opening.png'), linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url('" + coverImg + "')";
        }
        var headerSection = el('header');
        if (headerSection) {
            headerSection.style.backgroundImage = "url('_assets/img/decoration/brush-header.png'), linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('" + coverImg + "')";
        }
    }
}

function animateLetters(selector, baseDelay) {
    baseDelay = baseDelay || 0;
    document.querySelectorAll(selector).forEach(function (node, nodeIndex) {
        node.innerHTML = node.textContent.replace(/\S/g, function (char) {
            return '<span class="letter" style="display:inline-block;">' + char + '</span>';
        });
        anime({
            targets: node.querySelectorAll('.letter'),
            scale: [4, 1], opacity: [0, 1], translateZ: 0,
            easing: 'easeOutExpo', duration: 950,
            delay: function (_, i) { return baseDelay + (nodeIndex * 300) + 100 * i; }
        });
    });
}

function sanitize(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

function renderWishes(wishesData) {
    var wrapper = document.querySelector('#section-7 .pl-lg-10');
    if (!wrapper) return;

    if (!wishesData || !wishesData.length) {
        if (_sliderMessages) {
            try { _sliderMessages.destroy(); } catch (e) { }
            _sliderMessages = null;
        }
        wrapper.innerHTML = '<div id="tinyslider-container-messages" class="row"><div class="col-12 text-center py-5"><p class="text-muted">Belum ada ucapan</p></div></div>';
        return;
    }

    if (_sliderMessages) {
        try { _sliderMessages.destroy(); } catch (e) { }
        _sliderMessages = null;
    }

    wrapper.innerHTML = '';

    var newContainer = document.createElement('div');
    newContainer.id = 'tinyslider-container-messages';
    newContainer.className = 'row';
    newContainer.innerHTML = wishesData.map(function (w) {
        return '<div class="col-auto">'
            + '<div class="card card-message bg-black-500" style="min-width:280px;"><div class="card-body text-white">'
            + '<h6 class="fw-light text-height-2 mb-4" style="overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;">"' + sanitize(w.message) + '"</h6>'
            + '<div class="row align-items-center"><div class="col-auto"><div class="obj-fit obj-fit-cover w-5rem h-5rem"><img src="_assets/img/icons/avatar.svg" alt=""></div></div>'
            + '<div class="col pt-2"><h6 class="fw-bold" style="overflow-wrap:break-word;word-wrap:break-word;">' + sanitize(w.guest_name || w.name) + '</h6></div></div>'
            + '</div></div></div>';
    }).join('');

    wrapper.appendChild(newContainer);

    if (typeof tns === 'undefined') {
        setTimeout(function () { renderWishes(wishesData); }, 100);
        return;
    }

    function initSlider() {
        if (newContainer.offsetWidth === 0) {
            setTimeout(initSlider, 200);
            return;
        }

        try {
            _sliderMessages = tns({
                container: '#tinyslider-container-messages',
                controlsContainer: "#tinyslider-controls-messages",
                items: 1.1,
                nav: false,
                mouseDrag: true,
                gutter: 15,
                swipeAngle: false,
                loop: false,
                preventScrollOnTouch: 'force',
                responsive: {
                    568: { items: 2.2, gutter: 15 },
                    992: { items: 3.2, gutter: 20 }
                }
            });
        } catch (err) {
            console.warn('Messages slider init error:', err);
        }
    }

    initSlider();
}

function renderPayment(paymentData) {
    var section = el('payment-section');
    var list = el('payment-list');
    if (!section || !list) return;
    list.innerHTML = paymentData.map(function (p, i) {
        var img = getPaymentImage(p.method);
        var imgHtml = img
            ? '<img src="' + img + '" alt="' + p.method + '" style="width:80px;height:50px;object-fit:contain;">'
            : '<div style="width:80px;height:50px;display:flex;align-items:center;justify-content:center;font-weight:700;">' + sanitize(p.method).toUpperCase() + '</div>';
        return '<div class="text-center p-3" style="min-width:16rem;" data-aos="fade-up" data-aos-offset="-100" data-aos-duration="' + (1200 + i * 100) + '">'
            + imgHtml
            + '<div class="fw-bold mt-2">' + sanitize(p.value) + '</div>'
            + '<div class="fw-light">a.n ' + sanitize(p.name) + '</div>'
            + '<button type="button" class="btn-copy" data-value="' + sanitize(p.value) + '"><i class="fa-regular fa-copy"></i> Salin</button>'
            + '</div>';
    }).join('');
    section.style.display = 'block';
    if (typeof AOS !== 'undefined') AOS.refresh();
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }
    // Fallback untuk konteks non-secure (mis. file://)
    return new Promise(function (resolve, reject) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy') ? resolve() : reject(new Error('copy gagal'));
        } catch (err) {
            reject(err);
        }
        document.body.removeChild(ta);
    });
}

function handleCommentSubmit(e) {
    e.preventDefault();

    var form = e.target;
    var nameInput = form.querySelector('input[name="name"]');
    var messageInput = form.querySelector('input[name="message"]');

    var name = nameInput ? nameInput.value.trim() : '';
    var message = messageInput ? messageInput.value.trim() : '';

    if (!name) {
        showNotification('Nama tidak boleh kosong', 'error');
        if (nameInput) nameInput.focus();
        return;
    }

    if (!message) {
        showNotification('Pesan tidak boleh kosong', 'error');
        if (messageInput) messageInput.focus();
        return;
    }

    // Simpan ucapan ke database via API; bila backend tidak terjangkau,
    // fallback ke localStorage + dummy agar tetap terasa terkirim.
    apiPostWish(name, message)
        .then(function (resp) {
            if (!resp || !resp.success) throw new Error('gagal');

            FALLBACK_DATA.wishes = [{ name: name, message: message }].concat(FALLBACK_DATA.wishes || []);
            renderWishes(FALLBACK_DATA.wishes);

            if (nameInput) nameInput.value = '';
            if (messageInput) messageInput.value = '';
            showNotification('Ucapan berhasil dikirim!', 'success');
        })
        .catch(function () {
            var wish = { name: name, message: message, ts: Date.now() };
            saveUserWish(wish);
            FALLBACK_DATA.wishes = [wish].concat(FALLBACK_DATA.wishes || []);
            renderWishes(FALLBACK_DATA.wishes);

            if (nameInput) nameInput.value = '';
            if (messageInput) messageInput.value = '';
            showNotification('Ucapan berhasil dikirim!', 'success');
        });
}

function showNotification(message, type) {
    var notification = document.createElement('div');
    notification.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:99999;'
        + 'background:' + (type === 'success' ? '#10b981' : '#ef4444') + ';color:white;'
        + 'padding:16px 24px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);'
        + 'font-size:14px;font-weight:500;max-width:90%;text-align:center;'
        + 'animation:slideDown 0.3s ease-out;';
    notification.textContent = message;

    if (!document.getElementById('notification-style')) {
        var style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = '@keyframes slideDown{from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(function () {
        notification.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(function () {
            if (notification.parentNode) notification.parentNode.removeChild(notification);
        }, 300);
    }, 3000);
}

// Kapitalkan huruf pertama tiap kata nama tamu (agar case di URL tidak berpengaruh).
// Huruf setelah titik juga dikapitalkan agar gelar seperti "s.pd." tetap tampil "S.Pd."
function formatGuestName(str) {
    return str.replace(/\S+/g, function (w) {
        return w.replace(/(^|\.)([a-z])/g, function (m, p, c) {
            return p + c.toUpperCase();
        });
    });
}

var url = new URL(window.location.href);
var u = url.searchParams.get("name") ? formatGuestName(url.searchParams.get("name").replace(/_/g, " ")) : "";
if (u && el('guest')) el('guest').innerHTML = sanitize(u);

var _sliderMessages = null;

function startLeaves() {
    var overlay = document.getElementById('leavesOverlay');
    if (!overlay) return;
    overlay.innerHTML = '';
    overlay.classList.add('is-active');

    var count = window.innerWidth < 576 ? 10 : 20;
    var vh = window.innerHeight;
    var leafClasses = ['leaf-1', 'leaf-2', 'leaf-3', 'leaf-4', 'leaf-5'];

    for (var i = 0; i < count; i++) {
        var leaf = document.createElement('span');
        leaf.className = 'leaf ' + leafClasses[i % leafClasses.length];
        var size = 6 + Math.random() * 8;
        leaf.style.width = size + 'px';
        leaf.style.height = (size * 1.4) + 'px';
        leaf.style.left = Math.random() * 100 + '%';
        leaf.style.opacity = (0.5 + Math.random() * 0.4).toFixed(2);
        overlay.appendChild(leaf);

        if (typeof anime !== 'undefined') {
            var dur = anime.random(8000, 15000);
            var swayDir = Math.random() > 0.5 ? 1 : -1;
            anime({
                targets: leaf,
                translateY: [-20, vh + 40],
                translateX: [
                    { value: swayDir * anime.random(50, 120), duration: dur * 0.33, easing: 'easeInOutSine' },
                    { value: swayDir * anime.random(-120, -50), duration: dur * 0.34, easing: 'easeInOutSine' },
                    { value: swayDir * anime.random(40, 100), duration: dur * 0.33, easing: 'easeInOutSine' }
                ],
                rotate: anime.random(-360, 360),
                scale: [1, 0.7 + Math.random() * 0.4],
                duration: dur,
                delay: Math.random() * dur,
                loop: true,
                easing: 'linear'
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    AOS.init();

    // Render langsung dari data hardcoded (tanpa API/postMessage)
    applyData(Object.assign({}, FALLBACK_DATA, { guestName: u || FALLBACK_DATA.guestName }));

    // Muat ucapan dari database (real, shared). Bila backend mati,
    // fallback ke dummy + localStorage supaya halaman tetap hidup.
    apiGetWishes()
        .then(function (wishes) {
            FALLBACK_DATA.wishes = wishes;
            renderWishes(wishes);
        })
        .catch(function () {
            renderWishes(FALLBACK_DATA.wishes);
        });

    if (document.querySelector('.spouse-text')) {
        animateLetters('.spouse-text');
    }

    var btn_open = document.querySelector('#btn-open-opening');
    var btn_play = document.querySelector('#btn-play');
    var audio = document.querySelector('#audio');
    var audioSource = audio ? audio.querySelector('source') : null;
    var audioSrc = audioSource ? audioSource.getAttribute('src') : '';

    if (btn_open) {
        btn_open.addEventListener('click', function () {
            document.body.classList.add('opening-hide');
            document.body.classList.remove('opening-show');
            for (var aos of document.querySelectorAll('.aos-init')) aos.classList.remove('aos-animate');
            setTimeout(function () {
                var opening = document.querySelector('section#opening');
                if (opening) opening.remove();
                AOS.refresh();
                startLeaves();
            }, 2000);
            if (audio && audioSrc) {
                audio.play().catch(function () { });
                if (btn_play) btn_play.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }
        });
    }

    if (btn_play && audio) {
        btn_play.addEventListener('click', function () {
            if (audio.paused) {
                btn_play.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                audio.play();
            } else {
                btn_play.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
                audio.pause();
            }
        });
    }

    var btn_to_top = document.querySelector('#btn-to-top');
    var navbar = document.querySelector('.navbar');
    var navlinks = document.querySelectorAll('.nav-link.page-scroll');
    var str_section_query = "";
    for (var i = 0; i < navlinks.length; i++) {
        str_section_query += navlinks[i].getAttribute('href') + (i < navlinks.length - 1 ? ', ' : '');
    }
    var sectionlistener = document.querySelectorAll(str_section_query);

    var rsvpForm = document.querySelector('#comment-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', handleCommentSubmit);
    }

    var paymentList = el('payment-list');
    if (paymentList) {
        paymentList.addEventListener('click', function (e) {
            var btn = e.target.closest ? e.target.closest('.btn-copy') : null;
            if (!btn) return;

            copyToClipboard((btn.getAttribute('data-value') || '').replace(/\s+/g, ''))
                .then(function () {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Tersalin';
                    btn.classList.add('is-copied');
                    setTimeout(function () {
                        btn.innerHTML = '<i class="fa-regular fa-copy"></i> Salin';
                        btn.classList.remove('is-copied');
                    }, 2000);
                })
                .catch(function () {
                    showNotification('Gagal menyalin nomor rekening', 'error');
                });
        });
    }

    for (var btn of document.querySelectorAll('.page-scroll')) {
        btn.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' });
            e.preventDefault();
        });
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('navbar-scrolled');
            if (btn_to_top) btn_to_top.style.display = 'flex';
        } else {
            if (navbar) navbar.classList.remove('navbar-scrolled');
            if (btn_to_top) btn_to_top.style.display = 'none';
        }
        for (var s of sectionlistener) {
            if (window.scrollY > (s.offsetTop - 100) && window.scrollY < (s.offsetTop + s.offsetHeight)) {
                for (var link of document.querySelectorAll('.nav-link')) link.classList.remove('active');
                var activeLink = document.querySelector('.nav-link[href="#' + s.id + '"]');
                if (activeLink) activeLink.classList.add('active');
            }
        }
    });
});
