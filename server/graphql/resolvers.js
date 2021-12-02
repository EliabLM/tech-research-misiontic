const resolversProyectos = require('../models/proyecto/resolvers');
const resolversUsuarios = require('../models/usuario/resolvers');
const resolversInscripcion = require('../models/inscripcion/resolvers');

const resolvers = [resolversProyectos, resolversUsuarios, resolversInscripcion];
module.exports = resolvers;
