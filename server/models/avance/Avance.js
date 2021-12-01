const { Schema, model } = require('mongoose');
const { Enum_FaseProyecto, Enum_EstadoProyecto, Enum_Rol } = require('../enums');

const AvanceSchema = Schema({
    idProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true,
      },
    
    fechaAvance: {
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

    observacionesLider: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

      estudiante: {
        type: typeof Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
      },      

    });
    module.exports = model('Avance', AvanceSchema);