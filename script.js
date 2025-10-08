// --- DATA GAMBAR GALERI ---
const galleryData = {
    projects: [
        'images/projet.png', // Ganti dengan path gambar proyek 1
        'images/project2.png', // Ganti dengan path gambar proyek 2
    ],
    certificates: [
        'images/serifiakat-menejmen-proyek.png',  // Ganti dengan path gambar sertifikat 1
        'images/pemograman-java.png',  // Ganti dengan path gambar sertifikat 2
        'images/pemograman-c.png'   // Ganti dengan path gambar sertifikat 3
    ]
};

// =================================================================
// 🚀 TEMPAT ANDA MENGGANTI USERNAME/ID ANDA SAJA 🚀
// =================================================================

const socialUsernames = {
    // 1. Instagram: Hanya username IG Anda
    instagram: "doth.14",  
    // 2. WhatsApp: Kode negara + nomor TANPA tanda plus/spasi (Contoh: 6281234567890)
    whatsapp: "628873163575",         
    // 3. TikTok: Hanya username TikTok Anda (tanpa '@')
    tiktok: "jordyexz",     
    // 4. LinkedIn: Hanya ID profil akhir Anda (setelah /in/)
    linkedin: "dody-maulana-yusuf-755a2a387",       
    // 5. GitHub: Hanya username GitHub Anda
    github: "dodymaulana-pixel"      
};

// =================================================================
// 🛑 JANGAN UBAH KODE DI BAWAH INI JIKA ANDA TIDAK YAKIN 🛑
// =================================================================


function setupSocialLinks() {
    const links = document.querySelectorAll('.social-icons a');
    
    links.forEach(link => {
        const iconClass = link.getAttribute('aria-label').toLowerCase(); 
        let url = '#'; // Default jika username tidak ditemukan
        const username = socialUsernames[iconClass];

        if (username && username !== "") {
            switch (iconClass) {
                case 'instagram':
                    url = `https://www.instagram.com/${username}`;
                    break;
                case 'whatsapp':
                    url = `https://wa.me/${username}`;
                    break;
                case 'tiktok':
                    url = `https://www.tiktok.com/@${username}`;
                    break;
                case 'linkedin':
                    url = `https://www.linkedin.com/in/${username}`;
                    break;
                case 'github':
                    url = `https://github.com/${username}`;
                    break;
            }
        }
        
        link.href = url;
    });
}

// --- FUNGSI DARK/LIGHT MODE ---
document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    const icon = this.querySelector('i');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Cek preferensi saat halaman dimuat
(function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggleButton = document.getElementById('mode-toggle');
    const icon = toggleButton.querySelector('i');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
})();

// --- FUNGSI MODAL GALERI ---
const modal = document.getElementById("galleryModal");
const galleryGrid = document.getElementById("gallery-images");

function showGallery(type) {
    const images = galleryData[type];
    galleryGrid.innerHTML = ''; // Kosongkan konten sebelumnya
    const title = type === 'projects' ? 'Contoh Proyek' : 'Sertifikat Keahlian';

    images.forEach((src, index) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('gallery-item-card');

        const img = document.createElement('img');
        img.src = src;
        img.alt = `${title} ${index + 1}`;
        
        const description = document.createElement('p');
        description.classList.add('image-description');
        description.textContent = `${title} ke-${index + 1}`; 

        itemCard.appendChild(img);
        itemCard.appendChild(description);
        galleryGrid.appendChild(itemCard);
    });

    modal.style.display = "block"; 
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Panggil fungsi setupSocialLinks saat halaman dimuat
document.addEventListener('DOMContentLoaded', setupSocialLinks);