// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*global Cypress, cy*/
Cypress.Commands.add('login',({ username, password }) => {
  cy.request('POST', 'http://localhost:3003/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedUserBlogs', JSON.stringify(body))
    cy.visit('/')
  })
})

Cypress.Commands.add('addBlog', ({ title, author, url, likes }) => {
  cy.request({
    url: 'http://localhost:3003/api/blogs',
    method: 'POST',
    body: { title, author, url, likes },
    headers: {
      'Authorization' : `bearer ${JSON.parse(localStorage.getItem('loggedUserBlogs')).token}`
    }
  }).then( ({ body }) => {
    localStorage.setItem('blogTest', JSON.stringify(body))
  })
  cy.visit('/')
})

Cypress.Commands.add('deleteBlog', () => {

  cy.request({
    url: `http://localhost:3003/api/blogs/${JSON.parse(localStorage.getItem('blogTest')).id}`,
    method: 'DELETE',
    headers: {
      'Authorization' : `bearer ${JSON.parse(localStorage.getItem('loggedUserBlogs')).token}`
    }
  })
  cy.visit('/')
})