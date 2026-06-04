// retrieve the form from the DOM, print out the result
const form = document.querySelector("#fsyForm");
console.log(form);

// if the user selects one campus but doesnt check any campuses, display message "select one campus"
function getCheckedCampuses(campuses) {
    return Array.from(campuses).filter(campus => campus.checked).map(campus => campus.value);
    
}

// helper function to return if date is valid
function isDateValid () {
    const date = document.getElementById("availableDate").value;
    const todaysDate = new Date();
    return date > todaysDate
}

document.addEventListener("submit", event =>{
    event.preventDefault();
    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    console.log(campuses);
    if(form.travelRange.value === "one" && getCheckedCampuses(campuses).length == 0) {
        console.log("no campuses checked")
        document.getElementById("output").textContent = "Please select at least one campus.";
    }
    else {
        document.getElementById("output").textContent = ""
    }

    if(!isDateValid()) {
        document.getElementById("output").textContent = "future date only"
    }
});

// add event listener to the form to detect submit
document.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.email.value);
    console.log(form.travelRange.value);
});