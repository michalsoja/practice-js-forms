const form = document.querySelector('form');
const ulElement = document.querySelector('.messages');

form.noValidate = true;

form.addEventListener('submit', sendForm);

form.autocomplete = 'off';

let { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const allowedChars = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u

function sendForm(e) {

    e.preventDefault();

    function ifInvalidInput(name) {
        const newLi = document.createElement('li');
        newLi.innerText = `Invalid data: ${name}`;
        ulElement.appendChild(newLi);
    }

    function fullNameValidation(name) {
        if (name.value == '' || !allowedChars.test(name.value)) {
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
        if (name.value == '' || !allowedChars.test(name.value)) {

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
        if (number.value < 0) {
            let validName = number.name;
            ifInvalidInput(validName)
        }
    }
    function validateForZipCode(code) {
        const codeReg = /^[\d]{2}-[\d]{3}$/g;
        const result = code.value.match(codeReg);
        if (result == null) {
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

    if (ulElement.childNodes.length == 0) {
        alert('Dane prawidłowe!');
        for (let i = 0; form.elements.length - 1 > i; i++) {
            form.elements[i].value = '';
        }
    }

}











