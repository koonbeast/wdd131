let selectElem = document.querySelector("#dark_mode");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === "dark") {
        document.body.style.backgroundColor = "#2b2b2b";
        document.body.style.color = "white";
        document.querySelector("#place").style.color = "rgba(12, 255, 255, 0.6)";
        document.querySelector("#place").style.borderBottom = "solid rgba(139, 255, 255, 0.6) 1.5px"
        logo.src = "photos/byui-logo-white.png"
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
        document.querySelector("#place").style.color = "rgb(6, 141, 141)";
        document.querySelector("#place").style.borderBottom = "solid rgba(6, 141, 141, 0.212) 1px"
        logo.src = "photos/byui-logo-blue.webp"
    }
}