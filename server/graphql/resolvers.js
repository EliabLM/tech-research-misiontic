const resolversProyectos = require('../models/proyecto/resolvers');
const resolversUsuarios = require('../models/usuario/resolvers');
const resolversAvances = require('../models/avance/resolvers');

const resolvers = [resolversProyectos, resolversUsuarios, resolversAvances];
module.exports = resolvers;
