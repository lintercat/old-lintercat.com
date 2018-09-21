
import { messages, locale } from '../../../src/i18n'
const t = messages[locale]

describe('Hero', () => {
  it('Shows main heading first phrase', () => {
    cy.viewport('macbook-13')
    cy.visit('/')
    cy.contains(t.hero.title)
  })

  it('Shows main heading first phrase', () => {
    cy.viewport('macbook-13')
    cy.visit('/')
    cy.contains(t.hero.subtitle)
  })
})
