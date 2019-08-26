const XLSX = require('xlsx')
const mongoose = require("mongoose")

mongoose.connect(`mongodb://mongo:27017/inali`, {
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected. App running.'))

const UsuariaModelo = require('./modelos/Usuaria')

console.log('Corriendo importador')


const importar = (Modelo, coleccion) => {
  // leer .xlsx
  var wb = XLSX.readFile(`./xls/${coleccion}.xlsx`);

  // hacemos un arreglo de json
  const json = XLSX.utils.sheet_to_json(wb.Sheets['Sheet1'])

  
  // limpia docs antariores que provienen de un xls
  UsuariaModelo.remove({origen: 'xls'})
  .then(res => {
      console.log('a');
      
      console.log(`eliminando ${coleccion} de xls`, res)
    })
    .catch(err => {
        console.log('b');
        console.log(err)
    })
    
    // console.log(Modelo.remove.toString());
    // Modelo.find({}).then(res => console.log(res)).catch(err => console.log(err))
  // crear Instancias del Modelo para cada fila
  const objetos = json.map(o => {
    o.origen = 'xls'
    let nuevoObjeto = new UsuariaModelo(o)
    nuevoObjeto.save().then(res => console.log(res)).catch(err => console.log(err))
    return nuevoObjeto
  })
}



importar(UsuariaModelo, 'usuarias')