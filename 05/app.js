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

    function validationForNumbers(number){
        if(isNaN(number) || number.value == ''){
            console.log('co ty tworzysz')
        }
        else{
            console.log('dobrze');
        }

    }

    fullNameValidation(firstName);
    fullNameValidation(lastName);
    validationForCitiesAndStreets(street);
    validationForCitiesAndStreets(city);
    validationForNumbers(houseNumber);
    






}











