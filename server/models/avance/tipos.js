const { gql } = require('apollo-server');

const tiposAvance = gql`
  scalar Date

  type Avance {
    _id: ID!
    proyecto: Proyecto!
    fecha: Date!
    descripcion: String!
    observaciones: String!
    estudiante: Usuario!
  }

  type Query {
    obtenerAvances: [Avance]
    obtenerAvance(_id: ID!): Avance
  }

  type Mutation {
    crearAvance(
      proyecto: String!
      fecha: Date!
      descripcion: String!
      observaciones: String
      estudiante: String!
    ): Avance

    editarDescripcion(_id: ID!, descripcion: String!): Avance

    agregarObservacion(_id: ID!, observaciones: String!): Avance
  }
`;

module.exports = tiposAvance;
