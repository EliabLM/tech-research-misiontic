const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./database/db');
require('dotenv').config({ path: '.env' });

// Conectar base de datos
connectDB();

// Crear el servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Puerto
const PORT = process.env.PORT || 4000;

// Arrancar el servidor
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Servidor corriendo en la url ${url}`);
});
