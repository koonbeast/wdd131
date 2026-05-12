let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuButtonClick)

function handleMenuButtonClick(event) {
    // grab the nav tag
    // toggle .hide class on nav tag
    let navTag = document.querySelector("nav");
    navTag.classList.toggle("hide");
    // toggle animation
    menuBtn.classList.toggle("change");
}