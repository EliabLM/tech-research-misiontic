const Avance = require('./Avance');

const resolversAvances = {
  Query: {
    obtenerAvances: async () => {
      try {
        const avances = await Avance.find({})
          .populate('estudiante')
          .populate('proyecto');
        return avances;
      } catch (error) {
        console.error(error);
      }
    },

    obtenerAvance: async (parent, args) => {
      try {
        const avance = await Avance.findById(args._id)
          .populate('estudiante')
          .populate('proyecto');
        return avance;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    crearAvance: async (parent, args) => {
      try {
        const avanceNuevo = await Avance.create({
          proyecto: args.proyecto,
          fecha: args.fecha,
          descripcion: args.descripcion,
          estudiante: args.estudiante,
        });
        return avanceNuevo;
      } catch (error) {
        console.error(error);
      }
    },

    editarDescripcion: async (parent, args) => {
      try {
        const avance = await Avance.findByIdAndUpdate(args._id, {
          descripcion: args.descripcion,
        });
        return avance;
      } catch (error) {
        console.error(error);
      }
    },

    agregarObservacion: async (parent, args) => {
      try {
        const avanceEditado = await Avance.findByIdAndUpdate(args._id, {
          observaciones: args.observaciones,
        });
        return avanceEditado;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = resolversAvances;
