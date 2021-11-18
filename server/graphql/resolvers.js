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
};

module.exports = resolvers;
