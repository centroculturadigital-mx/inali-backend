const Usuaria = require("../../../modelos/Usuaria")

const BaseResolver = require('../../BaseResolver')
const { GraphQLString } = require('graphql')
const passport = require("koa-passport")

class UsuariaMutation extends BaseResolver {

    get args() {
      return {
        email: {
            type: GraphQLString,
            description: 'Email del usuaria.'
        },
        contrasenna: {
            type: GraphQLString,
            description: 'Contraseña del usuaria.'
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

module.exports = UsuariaMutation
