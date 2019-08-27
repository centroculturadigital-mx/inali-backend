const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')


const Usuario = new GraphQLObjectType({
  name: 'Usuario',
  description: 'Usuario entidad',
  fields: () => ({
    id: { type: GraphQLString },
    imagenPerfil: { type: GraphQLString },
    nombreUsuario: { type: GraphQLString },
    fechaNacimiento: { type: GraphQLString },
    genero: { type: GraphQLString },
    nombres: { type: GraphQLString },
    apellidos: { type: GraphQLString },
    contrasenna: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})

module.exports = Usuario