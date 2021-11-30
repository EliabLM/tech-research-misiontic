const { Schema, model } = require('mongoose');
const { Enum_FaseProyecto, Enum_EstadoProyecto } = require('../enums');

const ProyectoSchema = Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  objetivosGenerales: [
    {
      type: String,
      required: true,
    },
  ],
  objetivosEspecificos: [
    {
      type: String,
      required: true,
    },
  ],
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULO,
  },
  lider: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

module.exports = model('Proyecto', ProyectoSchema);
