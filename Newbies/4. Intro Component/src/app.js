let expressions={
    text: /^[a-zA-Z].*[\s\.]*$/,
    email: /\w+@{1}\w+\.{1}\w+/,
    password: /^(?![ .]+$)\w+$/
}

let errors = {
    firstName : "Your first name is required, and should only include letters",
    lastName: "Your last name is required, and should only include letters",
    email: "Your email is required, and should be like 'example@mail.com'",
    password: "Password is required, it can include letters and numbers"
}

const form = document.querySelector("#signUp-form");

// form.addEventListener('focusout', testForm);
form.addEventListener('keydown', testForm);

function testForm(e){
    if(e.target.tagName === 'INPUT' && e.target.type!=="submit"){
        let input = e.target;
        let inputType = input.type;
        let inputName = input.name;
        let value = e.target.value;
        if(!(expressions[inputType].test(value))){
            
            if(!(input.parentElement.classList.contains('invalid'))){
                
                input.parentElement.classList.add('invalid');

                let icon = document.createElement('IMG');
                icon.src="src/images/icon-error.svg";
                icon.classList.add('icon');
                input.parentElement.appendChild(icon);
    
                let warning = document.createElement('p');
                let warningText = document.createTextNode(errors[inputName]);
                warning.classList.add('warning');
                warning.appendChild(warningText);
                input.parentElement.parentElement.appendChild(warning);
            } 

        } else if(input.parentElement.classList.contains('invalid')){
            input.parentElement.lastChild.remove();
            input.parentElement.nextElementSibling.remove();
            input.parentElement.classList.remove('invalid');
        }
    } 
}

