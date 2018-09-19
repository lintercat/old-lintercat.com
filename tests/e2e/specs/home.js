
describe('Hero', () => {
  it('Shows welcome message', () => {
    cy.visit('/')
    cy.contains('we boost businesses')
  })
})
