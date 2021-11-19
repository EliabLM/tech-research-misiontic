const Usuario = require('../models/Usuario');

const resolvers = {
  Query: {
    getUsuarios: async () => {
      try {
        const usuarios = await Usuario.find({});
        return usuarios;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const { identificacion, nombre, apellido, email, password, estado, rol } =
        args;

      try {
        const usuarioNuevo = await Usuario.create({
          identificacion,
          nombre,
          apellido,
          email,
          password,
          rol,
          estado,
        });
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

module.exports = resolvers;
