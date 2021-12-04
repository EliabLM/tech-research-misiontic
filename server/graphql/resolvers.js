const resolversProyectos = require('../models/proyecto/resolvers');
const resolversUsuarios = require('../models/usuario/resolvers');
const resolversInscripcion = require('../models/inscripcion/resolvers');
const resolversAvances = require('../models/avance/resolvers');

const resolvers = [
  resolversProyectos,
  resolversUsuarios,
  resolversInscripcion,
  resolversAvances,
];

module.exports = resolvers;
