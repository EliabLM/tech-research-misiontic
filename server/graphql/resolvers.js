const resolversProyectos = require('../models/proyecto/resolvers');
const resolversUsuarios = require('../models/usuario/resolvers');

const resolvers = [resolversProyectos, resolversUsuarios];
module.exports = resolvers;
