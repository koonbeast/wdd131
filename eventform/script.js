const form = document.querySelector("form");
const type = document.querySelector("#type");
const output = document.querySelector("#output");

let typeChosen = ""


// date must be later than current date
function isDateValid () {
    const date = new Date(`${document.getElementById("eventDate").value}T00:00:00`)
    const todaysDate = new Date();
    return date > todaysDate
};

// popping up the correct entry box based on type selection
document.querySelector("#type").addEventListener("change", selection => {
    const selectedOption = selection.srcElement.value;
    const typeStudent = document.querySelector("#typeStudent");
    const typeGuest = document.querySelector("#typeGuest");

    if (selectedOption === "student") {
        typeGuest.style.display = "none";
        typeStudent.style.display = "flex";
        typeChosen = "Student"
    }
    else if (selectedOption === "guest") {
        typeStudent.style.display = "none";
        typeGuest.style.display = "flex";
        typeChosen = "Guest"
    }
    else {
        typeStudent.style.display = "none";
        typeGuest.style.display = "none";
        typeChosen = ""
    }
});

// proper popups if submission is in error
document.addEventListener("submit", event => {
    event.preventDefault();
    
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const eventDate = document.querySelector("#eventDate").value;

    if (isDateValid() === false) {
        document.getElementById("output").textContent = "Please choose a later date."
    }
    else if (typeChosen === "Student" && document.querySelector("#student").value.length !== 9 || isNaN(Number(document.querySelector("#student").value))) {
        output.textContent = "Student I# must be 9 digits"
    }
    else if (typeChosen === "Guest" && document.querySelector("#guest").value !== "EVENT131") {
        console.log(document.querySelector("#guest").value)
        output.textContent = "Access code denied"
    }
    else {
        output.textContent = ""

        output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Type: ${typeChosen}</p>
        <p>Event Date: ${eventDate}</p>
        `;

        form.reset();
    }
})