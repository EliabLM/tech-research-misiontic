const mongoose = require('mongoose');
const { Enum_EstadoUsuario, Enum_Rol } = require('./enums');


const UsuariosSchema = mongoose.Schema({
  identificacion: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: String,
    required: true,
    trim: true,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    required: true,
    trim: true,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
});


module.exports = mongoose.model('Usuario', UsuariosSchema);
