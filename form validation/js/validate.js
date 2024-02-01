
const firstNameError = document.getElementById('first-error')
const firstNameErrorMessage = document.getElementById('first-error-msg')
const firstName = document.getElementById('first-name-input')

const lastNameError = document.getElementById('last-error')
const lastNameErrorMessage = document.getElementById('last-error-msg')
const lastName = document.getElementById('last-name-input')

const emailError = document.getElementById('email-error')
const emailErrorMessage = document.getElementById('email-error-msg')
const emailValidErrorMessage = document.getElementById('email-valid-msg')
const email = document.getElementById('email')

const passwordError = document.getElementById('password-error')
const passwordErrorMessage = document.getElementById('password-error-msg')
const passwordErrorMessage1 = document.getElementById('password-error-msg1')
const passwordLengthErrorMessage = document.getElementById('password-length-msg')
const passwordMaxLengthErrorMessage = document.getElementById('password-max-length-msg')
const password = document.getElementById('password')

const form = document.getElementById('form')


 const validEmail = /@gmail\.com$/

firstName.onkeyup = function() {
    if(firstName.value.length >= 3) {
        firstNameError.style.display = 'none'
        firstNameErrorMessage.textContent = ''
    }
}
lastName.onkeyup = function() {
    if(lastName.value.length >= 3) {
        lastNameError.style.display = 'none'
        lastNameErrorMessage.textContent = ''
    }
}

email.onkeyup = function() {
    if(validEmail.test(email.value)) {
        emailError.style.display = 'none'
        emailErrorMessage.style.display = 'none'
        emailValidErrorMessage.style.display = 'none'
    }
}

password.onkeyup = function() {
    if(password.value.length > 12) {
        passwordError.style.display = 'none'
        passwordErrorMessage.style.display = 'none'
        passwordLengthErrorMessage.style.display = 'none'
        passwordMaxLengthErrorMessage.style.display = 'none'
    }
}
 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(firstName.value === '' || firstName.value === null) {
        firstNameError.style.display = 'block'
        firstNameErrorMessage.textContent = 'first name cannot be empty'     
    }


    if(lastName.value === '' || lastName.value === null) {
        lastNameError.style.display = 'block'
        lastNameErrorMessage.textContent = 'last name cannot be empty'
    } else {
        lastNameError.style.display = 'none'
        lastNameErrorMessage.textContent = ''
    }

    if(email.value === '' || email.value === null) {
        emailError.style.display = 'block'
        emailErrorMessage.style.display = 'block'

    } else if (!validEmail.test(email.value) ) {
        emailError.style.display = 'block'
        emailValidErrorMessage.style.display = 'block'
    } else {
        emailError.style.display = 'none'
        emailErrorMessage.style.display = 'none'
        emailValidErrorMessage.style.display = 'none'
    }

    if(password.value === '' || password.value === null) {
        passwordError.style.display = 'block'
        passwordErrorMessage.style.display = 'block'
    } else if (password.value.length < 12) {
        passwordError.style.display = 'block'
        passwordLengthErrorMessage.style.display = 'block'
    } else if(password.value.length >= 20) {
        passwordError.style.display = 'block'
        passwordMaxLengthErrorMessage.style.display = 'block'
    } else if(password.value === 'password') {
        passwordErrorMessage1.textContent = 'password cannot be password'
    } else {
        passwordError.style.display = 'none'
        passwordErrorMessage.style.display = 'none'
        passwordLengthErrorMessage.style.display = 'none'
        passwordMaxLengthErrorMessage.style.display = 'none'
    }
})