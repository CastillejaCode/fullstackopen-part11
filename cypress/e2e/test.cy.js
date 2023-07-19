describe('Pokedex', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('navigate to ivysaur', function () {
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})
