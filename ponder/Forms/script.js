// retrieve the form from the DOM, print out the result
const form = document.querySelector("#fsyForm");
console.log(form);


const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');


function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// if the user selects one campus but doesnt check any campuses, display message "select one campus"
function getCheckedCampuses(campuses) {
    return Array.from(campuses).filter(campus => campus.checked).map(campus => campus.value);
}

// helper function to return if date is valid
function isDateValid () {
    // const raw = document.getElementById("availableDate").value;
    // if (!raw) return false;
    const date = new Date(`${document.getElementById("availableDate").value}T00:00:00`)
    const todaysDate = new Date();
    console.log(date)
    console.log(todaysDate)
    console.log(date > todaysDate)
    return date > todaysDate
}


document.addEventListener("submit", event =>{
    event.preventDefault();
    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    console.log(campuses);



    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.travelRange.value;
    const availableDate = form.availableDate.value;
    const selectedCampuses = getCheckedCampuses(form.campus);
    const note = form.notes.value.trim();



    if(form.travelRange.value === "one" && getCheckedCampuses(campuses).length == 0) { // checks willing to serve selection and number of checkboxes checked
        console.log("no campuses checked")
        document.getElementById("output").textContent = "Please select at least one campus.";
    }
    else if (numberOfCampuses === "many" && getCheckedCampuses(campuses).length < 2) {
        document.getElementById("output").textContent = "Please select at least two campuses."
    }
    else if (isDateValid() === false) {
        document.getElementById("output").textContent = "Please choose a later date."
    }
    else {
        document.getElementById("output").textContent = ""



        output.innerHTML = `
        <h2>Preference Submitted</h2>
        <p>${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Availability: ${availableDate}</p>
        <p>Campuses: ${selectedCampuses.join(", ")}</p>
        <p>Preference Level: ${type}</p>
        `;

        form.reset();
        updateNotesField();


    }

});

// add event listener to the form to detect submit
document.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.email.value);
    console.log(form.travelRange.value);
    console.log("END")
});