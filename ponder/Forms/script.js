// retrieve the form from the DOM, print out the result
const form = document.querySelector("#fsyForm");
console.log();
// add event listener to the form to detect submit
document.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.email.value);
    console.log(form.travelRange.value);
});