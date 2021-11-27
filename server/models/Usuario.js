const { Schema, model } = require('mongoose');
const { Enum_EstadoUsuario, Enum_Rol } = require('./enums');

const UsuarioSchema = Schema({
  identificacion: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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
    unique: true,
    trim: true,
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

module.exports = model('Usuario', UsuarioSchema);
