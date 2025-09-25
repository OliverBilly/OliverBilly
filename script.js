document.addEventListener('DOMContentLoaded', function() {
    
    // Elemen-elemen Modal
    const modalOverlay = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModalButton = document.querySelector('.modal-close');

    // Semua project card yang bisa diklik
    const projectCards = document.querySelectorAll('.js-modal-trigger');

    // Fungsi untuk membuka modal
    function openModal(card) {
        // Ambil data dari atribut data-*
        const title = card.dataset.title;
        const imgSrc = card.dataset.img;
        const description = card.dataset.description;

        // Isi konten modal dengan data dari card
        modalTitle.textContent = title;
        modalImage.src = imgSrc;
        modalDescription.textContent = description;

        // Tampilkan modal
        modalOverlay.classList.add('modal-active');
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        modalOverlay.classList.remove('modal-active');
    }

    // Tambahkan event listener ke setiap project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // Tambahkan event listener untuk tombol close
    closeModalButton.addEventListener('click', closeModal);

    // Tambahkan event listener untuk menutup modal saat klik di luar konten
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

});