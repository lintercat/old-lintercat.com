describe('Subscribe form', () => {
  beforeEach(() => {
    cy.visit('/subscribe')

    cy.get('[data-cy="email-input"]').as('email-input')
    cy.get('[data-cy="subscribe-button"]').as('subscribe-button')
    cy.get('[data-cy="error-label"]').as('error-label')
  })

  it('Renders the email input', () => {
    cy.get('@email-input').should('be.visible')
  })

  it('Renders the subscribe button', () => {
    cy.get('@subscribe-button').should('be.visible')
  })

  it('Disables subscribe button when first-loaded', () => {
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('Disables button when email is less than 4 chars', () => {
    cy.get('@email-input').type('aaa')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('Disables button when the email is invalid', () => {
    cy.get('@email-input').type('Invalid email')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('Shows an error message when the email is invalid', () => {
    cy.get('@email-input').type('invalid email')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('Enables subscribe button when email is valid and longer than 4 chars', () => {
    cy.get('@email-input').type('hola@lintercat.com')
    cy.get('@subscribe-button').should('be.enabled')
  })

  it('Shows success message after subscribing with a valid email', () => {
    cy.get('@email-input').type('hola@lintercat.com')
    cy.get('@subscribe-button').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
