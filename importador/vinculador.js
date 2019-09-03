
const vinculador = (ModeloOrigen, ModeloVinculo, campoOrigen, campoDestino, esArreglo) => {

  ModeloOrigen.find({origen: 'xls'})
    .then(docs => {
      docs.forEach(doc => {
        if (esArreglo && !! doc[campoOrigen]) {
          console.log('doc', doc, campoOrigen)
          console.log('doc.campoOrigen', doc[campoOrigen])
          let ids = doc[campoOrigen].split(',')
          ModeloVinculo.find({id: {$in: ids}})
            .then(docs => {
              doc[campoDestino] = docs.map(doc => doc._id)
              console.log(
                'vinculando ',
                campoOrigen,
                doc[campoOrigen],
                campoDestino,
                doc[campoDestino]
              )
              doc.save().catch(err => console.log(err))
            })
        } else if (!! doc[campoOrigen]) {
          ModeloVinculo.findOne({id: doc[campoOrigen]})
            .then(otroDoc => {
              doc[campoDestino] = otroDoc._id
              doc.save().catch(err => console.log(err))
            })
        }
      })
    })
}

module.exports = vinculador