let faq = document.querySelector('.faq-text');

faq.addEventListener('click', (e)=>{
    if(e.target.tagName ==="H1"){
        return;
    }
    
    let targetElement = e.target;
    let targetTag = e.target.tagName;
    let searchedElement;

    switch (targetTag){
        case "SECTION":
            searchedElement=targetElement;
            break;
        case "H2":
        case "IMG":
            searchedElement = targetElement.parentElement.parentElement;
            break;
        case "DIV":
        case "P":
            searchedElement = targetElement.parentElement;
            break;          
    }

    let elementDisplayed = document.querySelector('.displayed');

    if(elementDisplayed){
        elementDisplayed.classList.remove('displayed');
        if(elementDisplayed===searchedElement){
            return;
        }
    }

    searchedElement.classList.add('displayed');

})