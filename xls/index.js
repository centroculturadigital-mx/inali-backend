var XLSX = require('xlsx');

// importar modelo Usuario de Mongoose
const UsuarioModelo = require('../models/usuario')

module.exports = () => {
  // leer .xlsx
  var wb = XLSX.readFile('./xls/usuarios.xlsx');

// hacemos un arreglo de json
  const usuariosJSON = XLSX.utils.sheet_to_json(wb.Sheets['Sheet1'])

  console.log(usuariosJSON)

  // limpia otros docs antariores que provienen de un xls
  UsuarioModelo.remove({src: 'xls'})
    .then(res => console.log(res))
    .catch(err => console.log(err))

  
  // crear Instancias del modelo para cada fila
  const usuarios = usuariosJSON.map(u => {
    u.src = 'xls'
    let nuevoUsuario = new UsuarioModelo(u)
    nuevoUsuario.save()
    return nuevoUsuario
  })
}

// borrar aquellos usarios en la db que tengan src=xls

// insertar si se validan