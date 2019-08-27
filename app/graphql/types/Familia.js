const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')


const Familia = new GraphQLObjectType({
  name: 'Familia',
  description: 'Familia entidad',
  fields: () => ({
    id: { type: GraphQLString },
    nombreOriginario: { type: GraphQLString },
    nombreCastellanizado: { type: GraphQLString },
    otrosNombres: { type: GraphQLString },
    comunidades: { type: GraphQLString },
    alfabeto: { type: GraphQLString },
    latitud: { type: GraphQLFloat },
    longitud: { type: GraphQLFloat },
    categoriasLinguisticas: { type: GraphQLString },
    riesgoDesaparicion: { type: GraphQLFloat },
    cantidadHablantes: { type: GraphQLString },
    distribucionDemografica: { type: GraphQLString },
    normaDeEscritura: { type: GraphQLString }
  })
})

module.exports = Familia