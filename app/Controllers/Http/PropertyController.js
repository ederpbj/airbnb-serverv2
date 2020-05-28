'use strict'
/*
Criando CRUD
Agora vamos botar a mão na massa, se você não
conhece o termo CRUD, é uma sigla para (Create,
  Read, Update, Detele), ou seja, operações básicas
  em um model. No controller de imóveis adicione a
  seguinte linha logo após a notação 'use strict'
  para termos acesso ao model de imóvel dentro do código:
*/
const Property = use('App/Models/Property')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with properties
 */
class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // Listar todos registros;
  // async index ({ request, response, view }) { }
  /*
  Por enquanto vamos apenas retornar todos os imóveis
  nesse método (mais tarde iremos buscar apenas imóveis
    próximos baseados na localização do usuário).
  */
//  Retorna todos os imóveis
  /* async index () {
    const properties = Property.all()

    return properties
  } */

  // Retorna apénas imóveis próximos
  /*
  O que estamos fazendo aqui é buscar os
  dados de latitude e longitude do corpo da
  nossa requisição (que serão enviados através
  do front-end depois) e utilizando nosso
  método nearBy para buscar apenas imóveis
  com no máximo 10km de distância */
  async index ({ request }) {
    const { latitude, longitude } = request.all()

    const properties = Property.query()
      .nearBy(latitude, longitude, 10)
      .fetch()

    return properties
  }

  /**
   * Render a form to be used for creating a new property.
   * GET properties/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

 /*  servem apenas para exibir os formulários de criação
  e edição respectivamente, os quais não existem em uma API */
  // async create ({ request, response, view }) {}
  // async edit ({ params, request, response, view }) {}

  /* Cada método que sobrou tem uma responsabilidade:

index: Listar todos registros;
show: Exibir um registro;
store: Criar novo registro;
update: Alterar um registro;
destroy: Remover um registro; */

  /**
   * Create/save a new property.
   * POST properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // Criar novo registro, Propriedade;
  // async store ({ request, response }) { }
  async store ({ auth, request, response }) {
    // ID do usuário logado através do objeto auth embutido
    // automaticamente em todos métodos dos controllers
    const { id } = auth.user
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    const property = await Property.create({ ...data, user_id: id })

    return property
  }
  /**
   * Display a single property.
   * GET properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // Exibir um registro;
  // async show ({ params, request, response, view }) { }
  async show ({ params }) {
    const property = await Property.findOrFail(params.id)

    await property.load('images')

    return property
  }

  /**
   * Render a form to update an existing property.
   * GET properties/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async edit ({ params, request, response, view }) {}

  /**
   * Update property details.
   * PUT or PATCH properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // Alterar um registro;
  // async update ({ params, request, response }) { }
  async update ({ params, request, response }) {
    // Busca pelo ID
    const property = await Property.findOrFail(params.id)

    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    property.merge(data)

    await property.save()

    return property
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // Remover um registro; junto com suas imagens
  // async destroy ({ params, request, response }) { }
  async destroy ({ params, auth, response }) {
    const property = await Property.findOrFail(params.id)

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await property.delete()
  }
}

module.exports = PropertyController
