const UsuarioModelo = require("../../../modelos/usuario")

const BaseResolver = require('../../BaseResolver')
const { GraphQLString } = require('graphql')
const passport = require("koa-passport")

class UserMutation extends BaseResolver {

    get args() {
      return {
        email: {
            type: GraphQLString,
            description: 'Email del usuario.'
        },
        contrsenna: {
            type: GraphQLString,
            description: 'Contraseña del usuario.'
        },
      }
    }

    async resolve(parentValue, args, ctx) {
        //calling super method to check authentication if applicable
        super.resolve(parentValue, args, ctx)
        try {
            passport.authenticate('local')
            return true
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserMutation

// const nuevoUsuario = new UsuarioModelo(entrada)
//     return nuevoUsuario.save()