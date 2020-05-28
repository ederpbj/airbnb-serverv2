'use strict'
/*
Veja que dessa vez, além de buscar a request buscamos
também uma variável auth dos parâmetros que é o meio
que o Adonis nos dá para realizarmos a autenticação
de forma simples.

Resgatamos os campos de e-mail e senha da requisição
e executamos o método auth.attempt para fazer login
e retornar nosso token JWT (já falaremos sobre ele).
*/
class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
