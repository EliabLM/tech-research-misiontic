const Proyecto = require('../models/Proyecto');
const Usuario = require('../models/Usuario');

const resolvers = {
  Query: {
    getUsuarios: async (parent, args) => {
      try {
        if (args.rol === 'ADMINISTRADOR') {
          const usuarios = await Usuario.find({});
          return usuarios;
        } else {
          return null;
        }
      } catch (error) {
        console.error(error);
      }
    },

    getUsuario: async (parent, args) => {
      try {
        const usuario = await Usuario.findById({ _id: args._id });
        return usuario;
      } catch (error) {
        console.error(error);
      }
    },

    getProyectos: async () => {
      try {
        const proyectos = await Proyecto.find({}).populate('lider');
        return proyectos;
      } catch (error) {
        console.error(error);
      }
    },

    getProyecto: async (parent, args) => {
      try {
        const proyecto = await Proyecto.findById(args._id).populate('lider');
        return proyecto;
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

    cambiarEstadoUsuario: async (parent, args) => {
      try {
        if (args.rol === 'ADMINISTRADOR') {
          const usuario = await Usuario.findByIdAndUpdate(args._id, {
            estado: args.estado,
          });
          return usuario;
        } else {
          return null;
        }
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

    crearProyecto: async (parent, args) => {
      const {
        nombre,
        objetivosGenerales,
        objetivosEspecificos,
        presupuesto,
        fechaInicio,
        fechaFin,
        lider,
      } = args;

      try {
        const proyectoNuevo = await Proyecto.create({
          nombre,
          objetivosGenerales,
          objetivosEspecificos,
          presupuesto,
          fechaInicio,
          fechaFin,
          lider,
        });
        return proyectoNuevo;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = resolvers;
