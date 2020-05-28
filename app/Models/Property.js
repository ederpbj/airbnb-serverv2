'use strict'

// importar a classe Database do Adonis
const Database = use('Database')

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

  /*
  Pra começar, vamos pensar na usabilidade do usuário quando
  acessa nossa aplicação. O ideal é que assim que acesse o
  usuário veja em um mapa os imóveis mais próximos dele,
  vamos manter um valor padrão de 10km agora.

  Para isso, precisamos adicionar uma nova regra de negócio
  ao nosso Model de Propery, mas por que no Model? Nesse caso,
  como vamos criar um filtro por distância que pode ser
  utilizado em mais locais do nosso código, podemos trabalhar
  com o conceito de Query Scopes do Adonis que permite criarmos
  nossos próprios métodos no construtor de queries.
  */
 static scopeNearBy (query, latitude, longitude, distance) {
  return query;
}

// com o Scope criado, podemos adicionar algumas regras a ele
static scopeNearBy (query, latitude, longitude, distance) {
  // cálculo naval de distância, multiplicado por 6371 que o transforma em quilômetros
  /*
  Logo após, adicionamos esse calculo ao SELECT do banco
  de dados além de retornar todos os outros campos com *.
  Ainda no fim, realizamos um whereRaw, que é utilizado
  quando não estamos utilizando as colunas comuns das
  tabelas e sim valores gerados por nós, para comparar
  a distância obtida através do Haversine com nossa variável
  distance que enviaremos depois para esse método.

  Por mais que pareça complexo, esse método é muito comum
  e utilizado em todo tipo de aplicação com cálculo de
  distância por geolocalização.
  */
  const haversine = `(6371 * acos(cos(radians(${latitude}))
    * cos(radians(latitude))
    * cos(radians(longitude)
    - radians(${longitude}))
    + sin(radians(${latitude}))
    * sin(radians(latitude))))`

  return query
    .select('*', Database.raw(`${haversine} as distance`))
    .whereRaw(`${haversine} < ${distance}`)
  }
}

module.exports = Property
