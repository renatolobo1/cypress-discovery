import SignupPage from '../pages/SignupPage'

describe('Cadastro', () =>{
  it('Seja um entregador', () =>{   

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

    var signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()    

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
    
  })

  it('Cpf Invalido', () =>{
    

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

    var signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')    
  })
})