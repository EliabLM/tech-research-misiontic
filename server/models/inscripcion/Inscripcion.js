const { Schema, model } = require('mongoose');
const { Enum_EstadoInscripcion } = require('../enums');

const InscripcionSchema = Schema({
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: 'Proyecto',
    required: true,
  },

  estudiante: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },

  estado: {
    type: String,
    required: true,
    trim: true,
    enum: Enum_EstadoInscripcion,
    default: Enum_EstadoInscripcion.PENDIENTE,
  },

  fechaIngreso: {
    type: Date,
    required: true,
    trim: true,
  },

  fechaEgreso: {
    type: Date,
    required: true,
    trim: true,
  },
});

module.exports = model('Inscripcion', InscripcionSchema);
