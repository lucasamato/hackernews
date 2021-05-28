import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import App from './'

describe('App', () => {
  context('Happy path', () => {
    const stories = require('../../../cypress/fixtures/stories')

    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        {
          body: {
            hits: [
              stories.list[0],
              stories.list[1]
            ]
          }
        }
      )

      mount(<App />)

      cy.get('.table-row').should('have.length', stories.list.length)
    })

    it('dismisses one item', () => {
      cy.get('button')
        .contains('Dismiss')
        .click()

      cy.get('.table-row').should('have.length', stories.list.length - 1)
    })

    it('loads more items', () => {
      cy.get('button')
        .contains('More')
        .click()

      cy.get('.table-row').should('have.length', stories.list.length * 2)
    })
  })

  context('Failure path', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { forceNetworkError: true }
      )
    })

    it('fallsback on a network failure', () => {
      mount(<App />)

      cy.get('p')
        .contains('Something went wrong.')
        .should('be.visible')
    })
  })
})
