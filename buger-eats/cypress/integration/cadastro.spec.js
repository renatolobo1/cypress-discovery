describe('Cadastro', () =>{
  it('Seja um entregador', () =>{
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    var entregador ={
      nome: 'Renato Lobo',
      cpf: '04151444424',
      email: 'renatolobo_@hotmail.com',
      whatsapp: '991116266',
      endereco: {
        cep: '57035330',
        rua: 'Rua Deputado José Lages',
        numero: '0',
        complemento: 'ap 02, bloco 07',
        bairo: 'Ponta Verde',
        cidade_uf: 'Maceió/AL'
      }
    }

    cy.get('input[name = "name"]').type(entregador.nome)
    cy.get('input[name = "cpf"]').type(entregador.cpf)
    cy.get('input[name = "email"]').type(entregador.email)
    cy.get('input[name = "whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name ="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

    cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
    cy.get('input[name="district"]').should('have.value', entregador.endereco.bairo)
    cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
  })
})