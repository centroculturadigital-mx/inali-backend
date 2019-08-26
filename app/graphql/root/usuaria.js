const Usuario = require('../../modelos/Usuaria');

module.exports = {
  
  usuarios() {
    return Usuario.find();
  },
  
  usuario({entrada}) {
    const { id } = entrada;
    return Usuario.findById( id );
  },
  
  
  usuarioCrear({entrada}) {
    const nuevoUsuario = new Usuario(entrada);
    return nuevoUsuario.save();
  },
  
  usuarioActualizar({entrada}) {
    const { id, ...rest } = entrada;
    return Usuario.findByIdAndUpdate(id, { $set: rest }, { new: true })
      .catch(
        err => console.error(err)
      );
  },
  
  usuarioEliminar({ entrada }) {
    const { id } = entrada;
    return Usuario.findByIdAndDelete(id)
      .then(usuario => usuario.remove())
      .then(() => `${id} eliminado correctamente`)
      .catch(err => console.error(err));
  },
  
}
