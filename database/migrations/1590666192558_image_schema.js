'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/* alterar a migration para conter a referência
à tabela de imóveis e também um campo para
armazenar o caminho físico da imagem na nossa aplicação */

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      // propriedades da imagem
      table
      .integer('property_id')
      .unsigned()
      .references('id')
      .inTable('properties')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
