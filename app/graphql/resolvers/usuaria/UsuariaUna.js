const BaseResolver = require('../../BaseResolver');
const {GraphQLNonNull, GraphQLString} = require('graphql');

const UsuariaModelo = require('../../../modelos/Usuaria')

class UsuariaUno extends BaseResolver {

    get args() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Id del usuaria.'
            }
        };
    }

    async resolve(parentValue, args, ctx) {
        //calling super method to check authentication if applicable
        super.resolve(parentValue, args, ctx);

        try {
            return await UsuariaModelo.findOne({ _id: args.id });
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UsuariaUno;