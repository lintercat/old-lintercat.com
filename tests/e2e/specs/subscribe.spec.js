import SubscribeForm from '@/pages/Home/components/Subscribe/components/Form'
const mountVue = require('cypress-vue-unit-test')

describe('Subscribe form', () => {
  beforeEach(mountVue(SubscribeForm))

  beforeEach(() => {
    cy.get('[data-cy="email-input"]').as('email-input')
    cy.get('[data-cy="subscribe-button"]').as('subscribe-button')
    cy.get('[data-cy="error-label"]').as('error-label')
  })

  it('renders the email input', () => {
    cy.get('@email-input').should('be.visible')
  })

  it('renders the subscribe button', () => {
    cy.get('@subscribe-button').should('be.visible')
  })

  it('disables the subscribe button when first-loaded', () => {
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('disables the subscribe button when email has less than 4 chars', () => {
    cy.get('@email-input').type('aaa')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('disables the subscribe button when the email is invalid', () => {
    cy.get('@email-input').type('Invalid email')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('shows an error message when the email is invalid', () => {
    cy.get('@email-input').type('invalid email')
    cy.get('@subscribe-button').should('be.disabled')
  })

  it('enables the subscribe button when email is valid and has at least 4 chars', () => {
    cy.get('@email-input').type('hola@lintercat.com')
    cy.get('@subscribe-button').should('be.enabled')
  })

  it('emmits a submit event with the email as payload when clicking the subscribe button', async () => {
    const spy = cy.spy()
    Cypress.vue.$on('submit', spy)

    const email = 'hola@lintercat.com'
    cy.get('@email-input').type(email)

    cy.get('@subscribe-button').click().then(() => {
      expect(spy).to.have.been.calledWith(email)
    })
  })
})
