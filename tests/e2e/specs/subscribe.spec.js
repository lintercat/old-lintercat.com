import SubscribeForm from '@/pages/Home/components/Subscribe/components/Form'
const mountVue = require('cypress-vue-unit-test')

describe('Subscribe form', () => {
  beforeEach(mountVue(SubscribeForm))

  beforeEach(() => {
    cy.get('[data-cy="email-input"]').as('email-input')
    cy.get('[data-cy="subscribe-button"]').as('subscribe-button')
    cy.get('[data-cy="error-label"]').as('error-label')
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

  it('Emmits a submit event with the email as payload when clicking the Subscribe button', async () => {
    const spy = cy.spy()
    Cypress.vue.$on('submit', spy)

    const email = 'hola@lintercat.com'
    cy.get('@email-input').type(email)

    cy.get('@subscribe-button').click().then(() => {
      expect(spy).to.have.been.calledWith(email)
    })
  })
})
