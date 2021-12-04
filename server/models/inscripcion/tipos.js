const { gql } = require('apollo-server');

const tiposInscripcion = gql`
  scalar Date

  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
    PENDIENTE
  }

  type Inscripcion {
    _id: ID!
    proyecto: Proyecto!
    estudiante: Usuario!
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
  }

  type Query {
    obtenerInscripciones: [Inscripcion]
    obtenerInscripcion(_id: ID!): Inscripcion
  }

  type Mutation {
    crearInscripcion(proyecto: String!, estudiante: String!): Inscripcion

    cambiarEstadoInscripcion(
      _id: ID!
      estado: Enum_EstadoInscripcion!
    ): Inscripcion
  }
`;

module.exports = tiposInscripcion;
