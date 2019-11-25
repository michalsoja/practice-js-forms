const form = document.querySelector('form');

form.noValidate = true;

form.addEventListener('submit', sendForm);

const { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const forbiddenChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/;
const forbiddenCharsWithoutSpace = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/;

function sendForm(e) {
    e.preventDefault();

    fullNameValidation(firstName);
    fullNameValidation(lastName);
    validationForCitiesAndStreets(street);
    validationForCitiesAndStreets(city);

    function fullNameValidation(name) {
        if (isNaN(name.value) && !forbiddenChars.test(name.value)) {
            console.log('lalalal');
        }
        else {
            console.log('co ty tworzysz');
        }
    }

    function validationForCitiesAndStreets(name) {
        if (isNaN(name.value) && !forbiddenCharsWithoutSpace.test(name.value)) {
            console.log('lalalal');
        }
        else {
            console.log('co ty tworzysz');
        }
    }





}











