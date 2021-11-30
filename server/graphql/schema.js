const tiposUsuario = require('../models/usuario/tipos');
const tiposProyecto = require('../models/proyecto/tipos');

const typeDefs = [tiposUsuario, tiposProyecto];
module.exports = typeDefs;
