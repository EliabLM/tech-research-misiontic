const { Schema, model } = require('mongoose');
const { Enum_FaseProyecto, Enum_EstadoProyecto, Enum_EstadoInscripcion } = require('../enums');

const InscripcionSchema = Schema({  
  idProyecto: {
    type: Schema.Types.ObjectId,
    ref: 'Proyecto',
    required: true,
  },  

  idEstudiante: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    },
   estadoInscripcion: {
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