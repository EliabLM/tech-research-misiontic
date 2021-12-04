const Inscripcion = require('./Inscripcion');

const resolversInscripcion = {
  Query: {
    obtenerInscripcion: async (parent, args) => {
      try {
        const inscripcion = await Inscripcion.findById(args._id)
          .populate('estudiante')
          .populate('proyecto');
        return inscripcion;
      } catch (error) {
        console.error(error);
      }
    },

    obtenerInscripciones: async () => {
      try {
        const inscripciones = await Inscripcion.find({})
          .populate('estudiante')
          .populate('proyecto');
        return inscripciones;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      try {
        const inscripcionNueva = await Inscripcion.create({
          proyecto: args.proyecto,
          estudiante: args.estudiante,
        });
        return inscripcionNueva;
      } catch (error) {
        console.error(error);
      }
    },

    cambiarEstadoInscripcion: async (parent, args) => {
      try {
        const inscripcion = await Inscripcion.findByIdAndUpdate(args._id, {
          estado: args.estado,
        })
          .populate('estudiante')
          .populate('proyecto');
        return inscripcion;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = resolversInscripcion;
