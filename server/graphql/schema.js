const { gql } = require('apollo-server');

const typeDefs = gql`
  type Usuario {
    _id: ID
    nombre: String!
    apellido: String!
    email: String!
  }

  type Query {
    getUsuarios: [Usuario]
  }
`;

module.exports = typeDefs;
