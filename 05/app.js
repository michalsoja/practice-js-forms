const form = document.querySelector('form');

form.noValidate = true;

form.addEventListener('submit', sendForm);

form.autocomplete = 'off';

const { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const forbiddenChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/;
const forbiddenCharsWithoutSpace = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/;

function sendForm(e) {

    e.preventDefault();

    function fullNameValidation(name) {
        if (name.value == '' || forbiddenChars.test(name.value)) {
            console.log('co ty tworzysz');
        }
        else {
            console.log('dobrze');
        }
    }
    function validationForCitiesAndStreets(name) {
        if (name.value == '' || forbiddenCharsWithoutSpace.test(name.value)) {
            console.log('co ty tworzytsz');
        }
        else {
            console.log('dobrze');
        }
    }

    function validationForHouse(number) {
        if (number.value <= 0 || number.value == '') {
            console.log('co ty tworzysz')
        }
        else {
            console.log('dobrze');
        }
    }

    function validateForFlat(number) {
        if (number.value == '' || number.value > 0) {
            console.log('dobrze')
        }
        else {
            console.log('co ty tworzysz');
        }
    }
    function validateForZipCode(code) {
        console.log(code.value)
        const codeReg = /^[\d]{2}-[\d]{3}$/g;
        const result = code.value.match(codeReg);
        console.log(result)
        if (result !== null) {
            console.log('dobrze')
        }
        else {
            console.log('co ty tworzysz')
        }

    }
    validateForZipCode(zip);
    fullNameValidation(firstName);
    fullNameValidation(lastName);
    validationForCitiesAndStreets(street);
    validationForCitiesAndStreets(city);
    validationForHouse(houseNumber);
    validateForFlat(flatNumber);







}











