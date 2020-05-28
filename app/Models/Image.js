'use strict'

/*
criar um campo “virtual” no nosso model de
imagem para retornar o caminho completo da
imagem para nosso front-end, para isso, no
arquivo app/Models/Image.js
*/
const Env = use('Env')
const Model = use('Model')

/*
Veja que criamos um campo “computed”
chamado url e adicionamos seu valor
com um método com prefixo get seguido
do campo em camel case. Utilizamos
também o Env para recuperar a URL
da nossa API.
*/
class Image extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`
  }
}

module.exports = Image
