describe('My First Test', function() {
  it('Navigates home from home', function() {
    cy.visit('http://localhost:8080')
    cy.contains('Home').click()
    cy.contains('Please sign in')
  })

  it('Does not allow to proceed without all the data', function() {
    cy.visit('http://localhost:8080')
    cy.contains('Sign in').click()
    cy.contains('Please sign in')
  })

  it('Signs up user', function() {
    cy.visit('http://localhost:8080')
    cy.get('#inputusername').type('zymek')
    cy.get('#inputPassword').type('password')
    cy.contains('Sign in').click()
    cy.url().should('match', /signin/)
  })

  it('Navigates home from signin', function() {
    cy.visit('http://localhost:8080')
    cy.get('#inputusername').type('zymek')
    cy.get('#inputPassword').type('password')
    cy.contains('Sign in').click()
    cy.contains('Home').click()
    cy.contains('Please sign in')
  })
})