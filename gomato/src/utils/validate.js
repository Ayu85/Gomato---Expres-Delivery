import React from 'react'

const validate = (email, password) => {
    let emailError = false;
    let passwordError = false;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    passwordError = regularExpression.test(password)
    if (email.endsWith('@gmail.com'))
        emailError = true;

    return [emailError, passwordError]
}

export default validate
