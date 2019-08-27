const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')


const Usuaria = new GraphQLObjectType({
  name: 'Usuaria',
  description: 'Usuaria entidad',
  fields: () => ({
    id: { type: GraphQLString },
    imagenPerfil: { type: GraphQLString },
    nombreUsuaria: { type: GraphQLString },
    fechaNacimiento: { type: GraphQLString },
    genero: { type: GraphQLString },
    nombres: { type: GraphQLString },
    apellidos: { type: GraphQLString },
    contrasenna: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})

module.exports = Usuaria