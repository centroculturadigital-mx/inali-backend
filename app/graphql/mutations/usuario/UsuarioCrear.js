const UsuarioModelo = require("../../../modelos/usuario")

const BaseResolver = require('../../BaseResolver');
const {GraphQLString, GraphQLInt} = require('graphql');

const bcrypt = require('bcryptjs');

class UserMutation extends BaseResolver {

    get args() {
        return {
            contrasenna: {
                type: GraphQLString,
                description: 'Contraseña del usuario'
            },
            nombres: {
                type: GraphQLString,
                description: 'Nombre del usuario'
            },
            nombreUsuario: {
                type: GraphQLString,
                description: 'NombreUsuario del usuario'
            },
            email: {
                type: GraphQLString,
                description: 'Email del usuario'
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

        const nuevoUsuario = new UsuarioModelo(args)

        try {
            return await nuevoUsuario.save();
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UserMutation;

// const nuevoUsuario = new UsuarioModelo(entrada);
//     return nuevoUsuario.save();