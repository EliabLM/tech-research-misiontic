const tiposUsuario = require('../models/usuario/tipos');
const tiposProyecto = require('../models/proyecto/tipos');
const tiposAvance = require('../models/avance/tipos');

const typeDefs = [tiposUsuario, tiposProyecto, tiposAvance];
module.exports = typeDefs;
