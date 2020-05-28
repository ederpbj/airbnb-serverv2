'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* Rota raiz
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
 */

/* rota que aceita o método POST no endereço /users
e chama o método create no controller UserController */

Route.post('/users', 'UserController.create')

/* Enviando essa requisição agora teremos acesso
ao token JWT que servirá para validarmos se o
usuário está autenticado ou não em nosso app. */

Route.post('/sessions', 'SessionController.create')

/* Nesse caso estamos informando para o Adonis criar
todas as rotas de listagem, exibição, criação, edição
e remoção de imóveis em um único comando. O método apiOnly()
garante as rotas create e edit que deletamos anteriormente
não tenham rota, já o middlewareauth vai garantir que usuários
não autenticados não possam utilizar essas rotas. */
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')


// adicionar novas imagens
Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')

// Exibir imagens
Route.get('images/:path', 'ImageController.show')
