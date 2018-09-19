
describe('Hero', () => {
  it('Shows main heading first phrase', () => {
    cy.visit('/')
    cy.contains('We boost businesses')
  })

  it('Shows main heading first phrase', () => {
    cy.visit('/')
    cy.contains('taking them to the cloud')
  })
})
