const {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const resolvers = require('./resolvers');
const mutations = require('./mutations');
const Usuaria = require('./types/Usuaria');

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
      usuarias: new resolvers.Usuaria.UsuariaTodasObtener(
        new GraphQLList(Usuaria), 
        "Obten todos los usuarias",
        false
      ),
      usuaria: new resolvers.Usuaria.UsuariaObtener(
        Usuaria, 
        "Obtener un usuaria",
        true
      )
  })
});

const Mutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: () => ({
      usuariaCrear: new mutations.Usuaria.UsuariaCrear(
        Usuaria, 
        "Crea un nuevo usuaria",
        false
      ),
      usuariaIngresar: new mutations.Usuaria.UsuariaIngresar(
        Usuaria, 
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