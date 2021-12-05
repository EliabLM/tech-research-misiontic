const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./database/db');
const dotenv = require('dotenv');

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, async () => {
  await connectDB();
  await server.start();

  server.applyMiddleware({ app });

  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
