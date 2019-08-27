const Usuaria = require("../../../modelos/Usuaria")

const BaseResolver = require('../../BaseResolver');
const {GraphQLString, GraphQLInt} = require('graphql');

const bcrypt = require('bcryptjs');

class UserMutation extends BaseResolver {

    get args() {
        return {
            contrasenna: {
                type: GraphQLString,
                description: 'Contraseña del usuaria'
            },
            nombres: {
                type: GraphQLString,
                description: 'Nombre del usuaria'
            },
            nombreUsuaria: {
                type: GraphQLString,
                description: 'NombreUsuaria del usuaria'
            },
            email: {
                type: GraphQLString,
                description: 'Email del usuaria'
            }
        };
    }

    async resolve(parentValue, args, ctx) {
        //calling super method to check authentication if applicable
        super.resolve(parentValue, args, ctx);

        console.log('args', args)
        console.log('ctx', ctx)
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(args.contrasenna, salt);

        args.contrasenna = hash

        const nuevoUsuaria = new Usuaria(args)

        try {
            return await nuevoUsuaria.save();
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UserMutation;

// const nuevoUsuaria = new Usuaria(entrada);
//     return nuevoUsuaria.save();