const URL = "http://127.0.0.1:8080";
const evaluatedInputs = 4;

let invalidExpressions={
    text: "    ",
    email: "email@email/com",
    password: "   .  "
}

let errors = {
    firstName : "Your first name is required, and should only include letters",
    lastName: "Your last name is required, and should only include letters",
    email: "Your email is required, and should be like 'example@mail.com'",
    password: "Password is required, it can include letters and numbers"
}

let validExpressions = {
    firstName : "John",
    lastName: "Smith",
    email: "example@email.com",
    password: "Password"
}


context('Form', ()=>{

    before(() => {
        cy.visit(URL);
    });

    describe('Test Form', ()=>{
        it('Fills inputs with invalid info', () =>{
            cy.get(".input-div input").then($inputs => {
                $inputs.each((i, input)=>{
                    let inputType=input.type;
                    let inputName=input.name;
                    cy.wrap(input).type(invalidExpressions[inputType]);
                    cy.wrap(input).parent().should('have.class', 'invalid');
                    cy.wrap(input).next().should('have.class', 'icon');
                    cy.wrap(input).parent().next().should('have.text', errors[inputName]);
                })
            })
        })

        it('Adds more invalid info', () =>{
            cy.get(".input-div input").then($inputs => {
                $inputs.each((i, input)=>{
                    let inputName=input.name;
                    cy.wrap(input).type("...");
                    cy.wrap(input).next('.icon').should('have.length', 1);
                    cy.wrap(input).parent().next().contains(errors[inputName]).should('have.length', 1);
                })
            })
        })

        it('Fills in with correct info', () =>{
            cy.get(".input-div input").then($inputs => {
                $inputs.each((i, input)=>{
                    let inputName=input.name;
                    cy.wrap(input).clear();
                    cy.wrap(input).type(validExpressions[inputName]);
                    cy.wrap(input).parent().should('have.not.class', 'invalid');
                    cy.wrap(input).next('.icon').should('not.exist');
                    cy.wrap(input).parent().next('.warning').should('not.exist');
                })
            })
        })

    })

})