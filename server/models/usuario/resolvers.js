const Usuario = require('./Usuario');
const bcryptjs = require('bcryptjs');

const resolversUsuarios = {
  Query: {
    obtenerUsuarios: async () => {
      try {
        const usuarios = await Usuario.find({});
        return usuarios;
      } catch (error) {
        console.error(error);
      }
    },

    obtenerUsuario: async (parent, args) => {
      try {
        const usuario = await Usuario.findById({ _id: args._id });
        return usuario;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    // ========== USUARIOS ==========
    crearUsuario: async (parent, args) => {
      try {
        const usuarioNuevo = new Usuario(args);

        const salt = await bcryptjs.genSalt(10);
        usuarioNuevo.password = await bcryptjs.hash(args.password, salt);

        await usuarioNuevo.save();

        return usuarioNuevo;
      } catch (error) {
        console.error(error);
      }
    },

    editarUsuario: async (parent, args) => {
      try {
        const usuarioEditado = await Usuario.findByIdAndUpdate(args._id, {
          nombre: args.nombre,
          identificacion: args.identificacion,
          apellido: args.apellido,
          email: args.email,
          password: args.password,
          rol: args.rol,
          estado: args.estado,
        });

        return usuarioEditado;
      } catch (error) {
        console.error(error);
      }
    },

    cambiarEstadoUsuario: async (parent, args) => {
      try {
        const usuario = await Usuario.findByIdAndUpdate(args._id, {
          estado: args.estado,
        });
        return usuario;
      } catch (error) {
        console.error(error);
      }
    },

    eliminarUsuario: async (parent, args) => {
      try {
        const usuarioEliminado = await Usuario.findOneAndDelete({
          _id: args._id,
        });

        return usuarioEliminado;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = resolversUsuarios;
