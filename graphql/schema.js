const tiposUsuario = require('../models/usuario/tipos');
const tiposProyecto = require('../models/proyecto/tipos');
const tiposAvance = require('../models/avance/tipos');
const tiposInscripcion = require('../models/inscripcion/tipos');

const typeDefs = [tiposUsuario, tiposProyecto, tiposAvance, tiposInscripcion];
module.exports = typeDefs;
