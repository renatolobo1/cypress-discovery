describe('Cadastro', () =>{
  it('Seja um entregador', () =>{
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    var deliver ={
      name: 'Renato Lobo',
      cpf: '04151444424',
      email: 'renatolobo_@hotmail.com',
      whatsapp: '991116266',
      address: {
        postalcode: '57035330',
        street: 'Rua Deputado José Lages',
        number: '0',
        details: 'ap 02, bloco 07',
        district: 'Ponta Verde',
        cyty_state: 'Maceió/AL'
      },
     delivery_method: "Moto",
      cnh: 'motorista.png'
    }

    cy.get('input[name = "name"]').type(deliver.name)
    cy.get('input[name = "cpf"]').type(deliver.cpf)
    cy.get('input[name = "email"]').type(deliver.email)
    cy.get('input[name = "whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name ="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.cyty_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('.dropzone input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    cy.get('form button[type="submit"]').click()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
  })

  it('Cpf Invalido', () =>{
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    var deliver ={
      name: 'Renato Lobo',
      cpf: '041.51444424',
      email: 'renatolobo_@hotmail.com',
      whatsapp: '991116266',
      address: {
        postalcode: '57035330',
        street: 'Rua Deputado José Lages',
        number: '0',
        details: 'ap 02, bloco 07',
        district: 'Ponta Verde',
        cyty_state: 'Maceió/AL'
      },
     delivery_method: "Moto",
      cnh: 'motorista.png'
    }

    cy.get('input[name = "name"]').type(deliver.name)
    cy.get('input[name = "cpf"]').type(deliver.cpf)
    cy.get('input[name = "email"]').type(deliver.email)
    cy.get('input[name = "whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name ="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.cyty_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('.dropzone input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    cy.get('form button[type="submit"]').click()

    cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
  })
})