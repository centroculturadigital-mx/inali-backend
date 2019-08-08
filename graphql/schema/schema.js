const { buildSchema } = require('graphql');


const PUBLICACION_STATUS_LIST = require('../../data/PUBLICACION_STATUS')

let STATUS_ELEMENTOS = ``
for( let i in PUBLICACION_STATUS_LIST ) {
  
  STATUS_ELEMENTOS += `
  ${PUBLICACION_STATUS_LIST[i]}
  `
}
const PUBLICACION_STATUS = `enum PublicacionStatus {
  ${STATUS_ELEMENTOS}
}`



const camposGenerales=`
  id: ID
  status: PublicacionStatus
`


const usuarioCampos = `
  imagenPerfil: String
  nombreUsuario: String
  fechaNacimiento: String
  genero: String
  nombres: String
  apellidos: String
  contrasenna: String
  email: String
`


module.exports = buildSchema(`


  ${PUBLICACION_STATUS}
    
  type Usuario {
    ${camposGenerales}
    ${usuarioCampos}
  }
  input UsuarioEntrada {
    ${camposGenerales}
    ${usuarioCampos}
  }
  
  
  
  type Query {
    
    usuarios: [Usuario]
    usuario( entrada: UsuarioEntrada! ): Usuario
    
  }
  
  
  type Mutation {
    
    usuarioCrear(entrada: UsuarioEntrada!): Usuario
    usuarioActualizar(entrada: UsuarioEntrada!): Usuario
    usuarioEliminar(entrada: UsuarioEntrada!): String

  }

`);
