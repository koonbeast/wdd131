const gallery = document.querySelector('#picgrid');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    modalImage.src = e.target.src.replace("sm", "full")
    modal.showModal();
}
closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.src = "" // clears the source
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        modalImage.src = ""
    }
});