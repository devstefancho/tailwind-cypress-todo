// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       /**
//        * Custom command to select DOM element by data-cy attribute.
//        * @example cy.dataCy('greeting')
//        */
//       dataCy(value: string): Chainable<Element>;
//     }
//   }
// }
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
}
