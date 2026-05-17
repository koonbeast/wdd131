const gallery = document.querySelector('#picgrid');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menu = document.querySelector('#navmenu')

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

menu.addEventListener('click', openMenu) // error with this because it will effect the nav display on desktop view

function openMenu(e) {
    let navList = document.querySelector('#navlist');

    if (navList.style.display === "grid") { // this line is key to toggle on and off
        navList.style.display = "none";
    }
    else{
        navList.style.display = "grid";
        navList.style.gridTemplateColumns = "1fr";
        navList.style.height = "20vh";
        navList.style.marginTop = "2vh";
        navList.style.textDecoration = "underline";
    }
}