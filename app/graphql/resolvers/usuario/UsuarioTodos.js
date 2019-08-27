const BaseResolver = require('../../BaseResolver');
const { GraphQLString, GraphQLInt } = require('graphql');

const UsuarioModelo = require('../../../modelos/usuario')

class UsuarioTodos extends BaseResolver {

    get args() {
        return {
            firstName: {
                type: GraphQLString,
                description: 'First name for the user.'
            },
            lastName: {
                type: GraphQLString,
                description: 'Last name for the user.'
            }
        };
    }

    async resolve(parentValue, args, ctx) {
        //calling super method to check authentication if applicable
        super.resolve(parentValue, args, ctx);

        try {
            return await UsuarioModelo.find(args);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UsuarioTodos;