const form = document.querySelector('form');
const ulElement = document.querySelector('.messages');

form.noValidate = true;

form.addEventListener('submit', sendForm);

form.autocomplete = 'off';

const { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const forbiddenChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d]/;
const forbiddenCharsWithoutSpace = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d]/;

function sendForm(e) {

    e.preventDefault();

    function ifInvalidInput(name) {
        const newLi = document.createElement('li');
        newLi.innerText = `Invalid data: ${name}`;
        ulElement.appendChild(newLi);
    }

    function fullNameValidation(name) {
        if (name.value == '' || forbiddenChars.test(name.value)) {
            let validName
            if (name.name == 'firstName') {
                validName = name.name
            }
            else {
                validName = name.name
            }
            ifInvalidInput(validName);

        }

    }
    function validationForCitiesAndStreets(name) {
        if (name.value == '' || forbiddenCharsWithoutSpace.test(name.value)) {

            let validName
            if (name.name == 'street') {
                validName = name.name
            }
            else {
                validName = name.name
            }
            ifInvalidInput(validName);

        }

    }

    function validationForHouse(number) {
        if (number.value <= 0 || number.value == '') {
            let validName = number.name;
            ifInvalidInput(validName);
        }

    }

    function validateForFlat(number) {
        if (number.value == '' || number.value > 0) {
            console.log('dobrze')
        }
        else {
            let validName = number.name;
            ifInvalidInput(validName)
        }
    }
    function validateForZipCode(code) {
        const codeReg = /^[\d]{2}-[\d]{3}$/g;
        const result = code.value.match(codeReg);
        console.log(result)
        if (result !== null) {
            console.log('dobrze')
        }
        else {
            let validName = code.name;
            ifInvalidInput(validName)
        }

    }

    function validateForVoivodeship(region) {
        if (region.value == '') {
            let validName = region.name;
            ifInvalidInput(validName)
        }



    }
    fullNameValidation(firstName);
    fullNameValidation(lastName);
    validationForCitiesAndStreets(street);
    validationForHouse(houseNumber);
    validateForFlat(flatNumber);
    validateForZipCode(zip);
    validationForCitiesAndStreets(city);
    validateForVoivodeship(voivodeship);








}











