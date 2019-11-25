const form = document.querySelector('form');

form.noValidate = true;

form.addEventListener('submit', sendForm);

const { firstName, lastName, street, houseNumber, flatNumber, zip, city, voivodeship } = form.elements;

const specialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

function sendForm(e) {
    e.preventDefault();

    fullNameValidation(firstName);
    fullNameValidation(lastName);
    
    function fullNameValidation(name) {
        if (isNaN(name.value) && !specialChars.test(name.value)) {
            console.log('lalalal');
        }
        else {
            console.log('co ty tworzysz');
        }
        
    }





}











