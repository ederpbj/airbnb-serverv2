'use strict'
// Resourceful controller for interacting with images

// acesso ao caminho da pasta de uploads chamada tmp
const Helpers = use('Helpers')

// Importa propriedade
const Property = use('App/Models/Property')

class ImageController {
  /**
   * Create/save a new image.
   * POST images
   */

  //  Exibe imagens da propriedade
  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }
  
  //   buscando o imóvel pelo ID recebido na URL
  async store ({ params, request }) {
    const property = await Property.findOrFail(params.id)

    // limitar para arquivos apenas do tipo de imagem com tamanho até 2mb
    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    /* com essas imagens, precisamos salvá-las em uma
    pasta de uploads para termos acesso posterior

    movendo TODAS imagens para uma pasta tmp/uploads
    no Adonis e para cada arquivo estou alterando o
    nome do mesmo com o timestamp atual evitando
    arquivos duplicados.
    */
    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))

    if (!images.movedAll()) {
      return images.errors()
    }

    /* Agora que já temos os arquivos vamos criar os
    registros de imagens no banco de dados
    associados com o imóvel: */
    await Promise.all(
      images
        .movedList()
        .map(image => property.images().create({ path: image.fileName }))
    )
  }

}

module.exports = ImageController
