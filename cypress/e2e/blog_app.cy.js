describe('blog app', () => {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Luis Navarro',
      username: 'Programmer',
      password: 'fullstack'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('/')
  })

  it('Login form is show', () => {
    cy.contains('Login')
  })

  describe('Login', function(){
    it('succeds with correct credentials', function(){
      cy.get('#username').type('Programmer')
      cy.get('#password').type('fullstack')
      cy.contains('Login').click()
      cy.contains('Luis Navarro logged-in')
    })
    it('fails with wrong credentials', function(){
      cy.get('#username').type('nobody')
      cy.get('#password').type('withoutpass')
      cy.contains('Login').click()
      cy.get('#container-error').should('contain', 'Wrong username or password')
    })
  })

  describe.only('When logged in', function(){
    beforeEach(function(){
      cy.login({ username: 'Programmer', password: 'fullstack'})
    })
    it('a blog can be created', function (){
      cy.contains('Create a blog').click()
      cy.addBlog({
        title: 'A blog created by Cypress with commands',
        author: 'Gon Freecks',
        url: 'hunterXhunter.com'
      })
      cy.contains('A blog created by Cypress with commands')
    })
  })
})