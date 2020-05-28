'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Property extends Model {
  // o imóvel sempre pertence a um usuário
  user () {
    return this.belongsTo('App/Models/User')
  }

  // imóvel possui muitas imagens
  /* criaremos o imóvel e junto com ele suas imagens,
  ou seja, não precisamos do relacionamento contrário */
  images () {
    return this.hasMany('App/Models/Image')
  }
}

module.exports = Property
