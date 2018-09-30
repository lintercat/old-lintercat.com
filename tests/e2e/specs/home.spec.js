
import { messages, locale } from '../../../src/i18n'
const t = messages[locale]

describe('Hero on Macbook 13"', () => {
  before(() => {
    cy.visit('/')
    cy.viewport('macbook-15')
  })

  it('Shows main heading first phrase', () => {
    cy.contains(t.hero.title)
  })

  it('Shows main heading second phrase', () => {
    cy.contains(t.hero.subtitle)
  })
})
