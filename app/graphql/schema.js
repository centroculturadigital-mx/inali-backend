const { schemaComposer } = require('graphql-compose')
const { composeWithMongoose } = require('graphql-compose-mongoose')

// Mongoose Models
const Familia = require('../modelos/Familia.js')
const Agrupacion = require('../modelos/Agrupacion.js')
const Variante = require('../modelos/Variante.js')
// const Tweet = require('../modelos/Tweet.js')
// const TwitterCuenta = require('../modelos/TwitterCuenta.js')
// const TwitterHashtag = require('../modelos/TwitterHashtag.js')

const customizationOptions = {}
// TC = Type Composer
const FamiliaTC = composeWithMongoose(Familia, customizationOptions)
const AgrupacionTC = composeWithMongoose(Agrupacion, customizationOptions)
const VarianteTC = composeWithMongoose(Variante, customizationOptions)
// const TweetTC = composeWithMongoose(Tweet, customizationOptions)
// const TwitterCuentaTC = composeWithMongoose(TwitterCuenta, customizationOptions)
// const TwitterHashtagTC = composeWithMongoose(TwitterHashtag, customizationOptions)

// relaciones


// TODO: construir construtor de relacion
// Familia tiene agrupaciones
FamiliaTC.addRelation(
  'agrupaciones',
  {
    resolver: () => AgrupacionTC.getResolver('findByIds'),
    prepareArgs: { 
      _ids: (source) => source.agrupacionesIds,
    },
    projection: { agrupacionesIds: 1 },
  }
)
// Agrupacion tiene Variantes
AgrupacionTC.addRelation(
  'familia',
  {
    resolver: () => FamiliaTC.getResolver('findById'),
    prepareArgs: { 
      _id: (source) => source.familiaId,
    },
    projection: { familiaId: 1 },
  }
)
// Agrupacion tiene Familia
AgrupacionTC.addRelation(
  'variantes',
  {
    resolver: () => VarianteTC.getResolver('findByIds'),
    prepareArgs: { 
      _ids: (source) => source.variantesIds,
    },
    projection: { varianteIds: 1 },
  }
)
// Variante tiene Agrupacion
VarianteTC.addRelation(
  'agrupacion',
  {
    resolver: () => AgrupacionTC.getResolver('findById'),
    prepareArgs: { 
      _id: (source) => source.agrupacionId,
    },
    projection: { agrupacionId: 1 },
  }
)
// Variante tiene Familia
VarianteTC.addRelation(
  'familia',
  {
    resolver: () => FamiliaTC.getResolver('findById'),
    prepareArgs: { 
      _id: (source) => source.familiaId,
    },
    projection: { familiaId: 1 },
  }
)

// Compositor de esquema de GraphQl

// TODO: construir constructor de Consultas
schemaComposer.Query.addFields({
  FamiliaById: FamiliaTC.getResolver('findById'),
  FamiliaByIds: FamiliaTC.getResolver('findByIds'),
  FamiliaOne: FamiliaTC.getResolver('findOne'),
  FamiliaMany: FamiliaTC.getResolver('findMany'),
  FamiliaCount: FamiliaTC.getResolver('count'),
  AgrupacionById: AgrupacionTC.getResolver('findById'),
  AgrupacionByIds: AgrupacionTC.getResolver('findByIds'),
  AgrupacionOne: AgrupacionTC.getResolver('findOne'),
  AgrupacionMany: AgrupacionTC.getResolver('findMany'),
  AgrupacionCount: AgrupacionTC.getResolver('count'),
  VarianteById: VarianteTC.getResolver('findById'),
  VarianteByIds: VarianteTC.getResolver('findByIds'),
  VarianteOne: VarianteTC.getResolver('findOne'),
  VarianteMany: VarianteTC.getResolver('findMany'),
  VarianteCount: VarianteTC.getResolver('count')
})

// TODO: construir constructor de Mutaciones
schemaComposer.Mutation.addFields({
  FamiliaCreateOne: FamiliaTC.getResolver('createOne'),
  FamiliaUpdateById: FamiliaTC.getResolver('updateById'),
  FamiliaRemoveById: FamiliaTC.getResolver('removeById'),
  AgrupacionCreateOne: AgrupacionTC.getResolver('createOne'),
  AgrupacionUpdateById: AgrupacionTC.getResolver('updateById'),
  AgrupacionRemoveById: AgrupacionTC.getResolver('removeById'),
  VarianteCreateOne: VarianteTC.getResolver('createOne'),
  VarianteUpdateById: VarianteTC.getResolver('updateById'),
  VarianteRemoveById: VarianteTC.getResolver('removeById'),
})

const graphqlSchema = schemaComposer.buildSchema()
module.exports = graphqlSchema
