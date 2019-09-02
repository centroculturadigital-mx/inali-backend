const mongoose = require("mongoose")

const importador = require('./importador')
const vinculador = require('./vinculador')

mongoose.connect(`mongodb://mongo:27017/inali`, {
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected. App running.'))

const Usuaria = require('./modelos/Usuaria')
const Familia = require('./modelos/Familia')
const Agrupacion = require('./modelos/Agrupacion')
const Variante = require('./modelos/Variante')

console.log('Corriendo importador')

importador(Usuaria, 'usuarias')
importador(Familia, 'familias')
importador(Agrupacion, 'agrupaciones')
importador(Variante, 'variantes')

setTimeout(() => {
  vinculador(Familia, Agrupacion, 'agrupaciones_ids', 'agrupacionesIds', true)
  vinculador(Agrupacion, Variante, 'variantes_ids', 'variantesIds', true)
  vinculador(Agrupacion, Familia, 'familia_id', 'familiaId', false)
  vinculador(Variante, Agrupacion, 'agrupacion_id', 'agrupacionId', false)
  vinculador(Variante, Familia, 'familia_id', 'familiaId', false)
}, 5000)
