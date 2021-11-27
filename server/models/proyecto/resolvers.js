const Proyecto = require('./Proyecto');

const resolversProyectos = {
  Query: {
    obtenerProyectos: async () => {
      try {
        const proyectos = await Proyecto.find({}).populate('lider');
        return proyectos;
      } catch (error) {
        console.error(error);
      }
    },

    obtenerProyecto: async (parent, args) => {
      try {
        const proyecto = await Proyecto.findById(args._id).populate('lider');
        return proyecto;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      if (args.rol !== 'LIDER') {
        // Mensaje de falta de autorización
        console.log('Falta autorización');
        return null;
      } else {
        try {
          const proyectoNuevo = await Proyecto.create({
            nombre: args.nombre,
            objetivosGenerales: args.objetivosGenerales,
            objetivosEspecificos: args.objetivosEspecificos,
            presupuesto: args.presupuesto,
            fechaInicio: args.fechaInicio,
            fechaFin: args.fechaFin,
            lider: args.lider,
          });
          return proyectoNuevo;
        } catch (error) {
          console.error(error);
        }
      }
    },

    editarProyecto: async (parent, args) => {
      if (args.rol !== 'LIDER') {
        // Mensaje de falta de autorización
        console.log('No autorizado');
        return null;
      } else {
        try {
          const proyectoEditado = await Proyecto.findByIdAndUpdate(args._id, {
            nombre: args.nombre,
            objetivosGenerales: args.objetivosGenerales,
            objetivosEspecificos: args.objetivosEspecificos,
            presupuesto: args.presupuesto,
            fechaInicio: args.fechaInicio,
            fechaFin: args.fechaFin,
          });
          return proyectoEditado;
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};

module.exports = resolversProyectos;
