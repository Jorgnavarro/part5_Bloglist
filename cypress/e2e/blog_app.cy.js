describe('blog app', () => {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Luis Navarro',
      username: 'Programmer',
      password: 'fullstack'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    const user2 = {
      name: 'Bocruz Snake',
      username: 'darkhunter',
      password: 'fullstack'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user2)
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

    describe('Interacting with a blog', function(){
      beforeEach(function(){
        cy.addBlog({
            title: 'A blog created by Cypress with commands',
            author: 'Gon Freecks',
            url: 'hunterXhunter.com'
        })
      })
      it('A blog can have a like', function(){
          cy.get('#btn-details').click()
          cy.get('.likesTest').contains('likes: 0')
          cy.get('#btn-likes').click()
          cy.get('.likesTest').should('contain', 'likes: 1')
      })
      it('A blog can be deleted', function(){
          cy.get('#btn-details').click()
          cy.get('#btn-delete').click()
          cy.get('.swal2-confirm').click()
          cy.get('#initialList').should('be.empty')
      })
      it('A blog cannot be deleted by another user', function(){
        cy.login({
          username:'darkhunter', password:'fullstack'
        })
        cy.get('#btn-details').click()
        cy.get('#container-btnDelete').should('be.empty')
      })
    })
    
  })
})