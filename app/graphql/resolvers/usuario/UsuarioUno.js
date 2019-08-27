const BaseResolver = require('../../BaseResolver');
const {GraphQLNonNull, GraphQLString} = require('graphql');

const UsuarioModelo = require('../../../modelos/usuario')

class UsuarioUno extends BaseResolver {

    get args() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Id del usuario.'
            }
        };
    }

    async resolve(parentValue, args, ctx) {
        //calling super method to check authentication if applicable
        super.resolve(parentValue, args, ctx);

        try {
            return await UsuarioModelo.findOne({ _id: args.id });
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UsuarioUno;