context('Navigation', () => {

  it('navigate all links', () => {

    cy.visit('http://localhost:4200')
  
    cy.contains('Home').click()
    cy.location('pathname').should('eq', '/home')
    cy.go('back')
  
    cy.contains('Devices').click()
    cy.location('pathname').should('eq', '/devices')
    cy.go('back')
  
    cy.contains('Support').click()
    cy.location('pathname').should('eq', '/support')
    cy.go('back')
  
  });

})
