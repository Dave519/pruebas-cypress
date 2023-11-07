/// <reference types="cypress"/>

describe("Bank proof automatized", () => {

    beforeEach(() => {
        // Run before each test in the block
        cy.visit("http://zero.webappsecurity.com")
    })


    it("Validate homepage", () => {
    
        cy.get('.active > img').should('be.visible')
        cy.get('#online_banking_features > :nth-child(1) > h4').contains('Online Banking')

    })

    it("E2E proof - Money transfer", () => {

        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').check()
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type('400')
        cy.get('#tf_description').type('Money transfer I doubt')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('be.visible').and('contain', 'You successfully submitted your transaction.')

    })

    //With only method, only this test will run

    it("Validate - My Money Map", () => {
         
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').check()
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-12359').should('be.visible')
        cy.get('#ext-sprite-125679').click()
        cy.get('#ext-sprite-12359').should('not.exist')
    
    })

})
