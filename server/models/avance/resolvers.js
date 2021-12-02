const Avance = require('./Avance');

const resolversAvances = {
  Query: {
    obtenerAvances: async () => {
      try {
        const avances = await Avance.find({}).populate('lider');
        return avances;
      } catch (error) {
        console.error(error);
      }
    },
  
    obtenerAvance: async (parent, args) => {
      try {
        const avance = await Avance.findById(args._id).populate('lider');
        return avance;
      } catch (error) {
        console.error(error);
      }
    },
  },
  
  Mutation: {
    crearAvance: async (parent, args) => {
      if (args.rol !== 'ESTUDIANTE') {
        // Mensaje de falta de autorización
        console.log('Falta autorización');
        return null;
      } else {
        try {
          const avanceNuevo = await Avance.create({
            fechaAvance: args.fechaAvance,
            descripcion: args.descripcion,              
            estudiante: args.estudiante,
          });
          return avanceNuevo;
        } catch (error) {
          console.error(error);
        }
      }
    },
  
    editarAvance: async (parent, args) => {
      if (args.rol !== 'LIDER') {
        // Mensaje de falta de autorización
        console.log('No autorizado');
        return null;
      } else {
        try {
          const avanceEditado = await Avance.findByIdAndUpdate(args._id, {
            observacionesLider: args.observacionesLider,
            lider: args.lider,
          });
          return avanceEditado;
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};

module.exports = resolversAvances;