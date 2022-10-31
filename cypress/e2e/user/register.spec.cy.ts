describe("Register User", () => {
  it("should show required field message", () => {
    cy.visit("https://eng-software-project.vercel.app/register");

    cy.get('[type="text"]').type("Vinicius")
    cy.get('[type="email"]').type("vinicius@email.com")
    cy.get('[type="submit"]').click()

    cy.get(':nth-child(4) > .sc-dkrFOg').should('contain','Campo brigatório')
  })
})