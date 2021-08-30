const form = document.querySelector('form');
const input = document.querySelector("#email");
const validValue = /\w+@{1}\w+\.{1}\w+/;

input.addEventListener('keydown', (e)=>{
    let value = e.target.value;
    if(!validValue.test(value)){
        applyInvalidFormat(e.target);
        form.onsubmit=(e)=>{e.preventDefault()};
    } else{
        removeInvalidFormat(e.target);
        form.onsubmit=formSent;
    }
});

function applyInvalidFormat(el){
    let label = el.parentElement;
    if(!label.classList.contains('invalid')){

        let form = label.parentElement.parentElement;
        
        label.classList.add('invalid');

        let icon = document.createElement('IMG');
        icon.src="src/images/icon-error.svg";
        icon.classList.add("warning-icon");
        label.appendChild(icon);

        let warning = document.createElement('P');
        let warningText = document.createTextNode('Please provide a valid email');
        warning.appendChild(warningText);
        warning.classList.add('warning');

        form.appendChild(warning);
    }
}

function removeInvalidFormat(el){
    let label = el.parentElement;
    if(label.classList.contains('invalid')){
        label.classList.remove('invalid');
        label.lastElementChild.remove();
        let form = label.parentElement.parentElement;
        form.lastElementChild.remove();
    }
}

function formSent(e){
    e.preventDefault();
    
    form.firstElementChild.remove();
    
    let success = document.createElement('P');
    let message = document.createTextNode('Thanks for provinding your email! We will keep you posted with our news and annoucements :)');
    success.appendChild(message);
    success.classList.add('success');

    form.appendChild(success);
}