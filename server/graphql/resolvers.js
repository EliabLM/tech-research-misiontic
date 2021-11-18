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
  },
};

module.exports = resolvers;
