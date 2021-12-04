const { Schema, model } = require('mongoose');
const {
  Enum_FaseProyecto,
  Enum_EstadoProyecto,
  Enum_Rol,
} = require('../enums');

const AvanceSchema = Schema({
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: 'Proyecto',
    required: true,
  },

  fecha: {
    type: Date,
    required: true,
    unique: true,
    trim: true,
  },

  descripcion: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  observaciones: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  estudiante: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

module.exports = model('Avance', AvanceSchema);
