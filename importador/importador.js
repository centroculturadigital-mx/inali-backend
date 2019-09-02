const XLSX = require('xlsx')

const importador = (Modelo, coleccion) => {
  console.log('Imporatando ' + coleccion)
  // leer .xlsx
  var wb = XLSX.readFile(`./xls/${coleccion}.xlsx`);

  // hacemos un arreglo de json
  const json = XLSX.utils.sheet_to_json(wb.Sheets['Sheet1'])

  // limpia docs antariores que provienen de un xls
  Modelo.remove({origen: 'xls'})
    .then(res => {
      console.log(`eliminando ${coleccion} de xls`, res)
    })
    .catch(err => {
        console.log(err)
    })
    
  // crear Instancias del Modelo para cada fila
  const objetos = json.map(o => {
    o.origen = 'xls'
    let nuevoObjeto = new Modelo(o)
    nuevoObjeto.save().catch(err => console.log(err))
    return nuevoObjeto
  })
}

module.exports = importador