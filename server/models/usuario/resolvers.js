const Usuario = require('./Usuario');
const bcryptjs = require('bcryptjs');
const { genToken, verifyToken } = require('../../utils.js/tokens');


const resolversUsuarios = {
  Query: {
    obtenerUsuarios: async () => {
      try {
        const usuarios = await Usuario.find({});
        return usuarios;
      } catch (error) {
        // console.error(error);
      }
    },

    obtenerUsuario: async (_, args) => {
      try {
        const usuario = await Usuario.findById({ _id: args._id });
        return usuario;
      } catch (error) {
        // console.error(error);
      }
    },

    obtenerEstudiantes: async () => {
      try {
        const estudiantes = await Usuario.find({ rol: 'ESTUDIANTE' });
        return estudiantes;
      } catch (error) {
        // console.error(error);
      }
    },
  },

  Mutation: {
    // ========== USUARIOS ==========
    crearUsuario: async (__, args) => {
      try {
        const usuarioNuevo = new Usuario(args);

        const salt = await bcryptjs.genSalt(10);
        usuarioNuevo.password = await bcryptjs.hash(args.password, salt);

        await usuarioNuevo.save();

        const { _id, nombre, apellido, rol, estado } = usuarioNuevo

        return {
          success: true,
          message: "Usuario autenticado",
          usuario: usuarioNuevo,
          token: genToken({ _id, nombre, apellido, rol, estado })
        }
      } catch (error) {
        console.error(error);
      }
    },

    editarUsuario: async (_, args) => {
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

    cambiarEstadoUsuario: async (_, args) => {
      try {
        const usuario = await Usuario.findByIdAndUpdate(args._id, {
          estado: args.estado,
        });
        return usuario;
      } catch (error) {
        console.error(error);
      }
    },

    eliminarUsuario: async (_, args) => {
      try {
        const usuarioEliminado = await Usuario.findOneAndDelete({
          _id: args._id,
        });

        return usuarioEliminado;
      } catch (error) {
        console.error(error);
      }
    },

    loginUser: async (_, { email, password }) => {
      try {
        const user = await Usuario.findOne({ email: email })
        if (!user) {
          return {
            success: false,
            message: "Usuario no encontrado",
          }
        }

        if (!bcryptjs.compare(user.password, password)) {
          return {
            success: false,
            message: "Contraseña no valida",
          }
        }

        const { _id, nombre, apellido, rol, estado } = user

        return {
          success: true,
          message: "Usuario autenticado",
          usuario: user,
          token: genToken({ _id, nombre, apellido, rol, estado })
        }
      } catch (error) {
        console.log(error);
      }
    },

    verificarToken: async (_, { token }) => {
      const resp = await verifyToken(token)

      if (typeof (resp) === typeof ({})) {
        return {
          success: false,
          message: resp.message,
        }
      }

      const user = await Usuario.findOne(JSON.parse(resp))

      return {
        success: true,
        message: "Usuario autenticado",
        usuario: user,
        token
      }
    }
  },
};

module.exports = resolversUsuarios;
