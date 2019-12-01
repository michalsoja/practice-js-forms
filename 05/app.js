const form = document.querySelector('form');
const ulElement = document.querySelector('.messages');

form.noValidate = true;

form.addEventListener('submit', sendForm);

form.autocomplete = 'off';

let { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const allowedChars = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u

let errors = [];

function sendForm(e) {

    e.preventDefault();

     while(ulElement.firstChild) {
         ulElement.removeChild(ulElement.firstChild);
    }

    fullNameValidation(firstName);
    fullNameValidation(lastName);
    cityAndStreetValidation(street);
    houseNumberValidation(houseNumber);
    flatNumberValidation(flatNumber);
    validateForZipCode(zip);
    cityAndStreetValidation(city);
    regionValidation(voivodeship);

    if(errors.length > 0){
        errors.forEach(element =>{
            const newLi = document.createElement('li');
            newLi.innerText = element;
            ulElement.appendChild(newLi);
        })
    }
    else{
        alert('Dane prawidłowe!');
    }
    errors = [];
}


function fullNameValidation(fullName) {
    if (fullName.value == '' || !allowedChars.test(fullName.value)) {

        if (fullName.name == 'firstName') {
            errors.push('First Name is required')
        }
        else {
            errors.push('Last name is required')
        }
    }
}
function cityAndStreetValidation(data) {
    if (data.value == '' || !allowedChars.test(data.value)) {

        if (data.name == 'street') {
            errors.push('Street is required')
        }
        else {
            errors.push('City is required')
        }
    }
}

function houseNumberValidation(houseNumber) {
    if (houseNumber.value <= 0 || houseNumber.value == '') {
        errors.push('House number name is required')
    }
}
function flatNumberValidation(flatNumber) {
    if (flatNumber.value < 0) {
        errors.push('Wrong flat number value')
    }
}
function validateForZipCode(zipCode) {
    const codeReg = /^[\d]{2}-[\d]{3}$/g;
    const result = zipCode.value.match(codeReg);
    if (result == null) {
        errors.push('Wrong zipCode value')
    }
}
function regionValidation(region) {
    if (region.value == '') {
        errors.push('Wrong region value')
    }
}











