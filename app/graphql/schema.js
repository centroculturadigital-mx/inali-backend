const {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const resolvers = require('./resolvers');
const mutations = require('./mutations');
const Usuario = require('./types/Usuario');

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
      usuarios: new resolvers.Usuario.UsuarioTodosObtener(
        new GraphQLList(Usuario), 
        "Obten todos los usuarios",
        false
      ),
      usuario: new resolvers.Usuario.UsuarioObtener(
        Usuario, 
        "Obtener un usuario",
        true
      )
  })
});

const Mutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: () => ({
      usuarioCrear: new mutations.Usuario.UsuarioCrear(
        Usuario, 
        "Crea un nuevo usuario",
        false
      ),
      usuarioIngresar: new mutations.Usuario.UsuarioIngresar(
        Usuario, 
        "Updates current user",
        true
      )
  })
});


const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = Schema;