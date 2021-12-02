const { gql } = require('apollo-server');

const tiposInscripcion = gql`
  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
    PENDIENTE    
  }
   
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  type Query {
    obtenerInscripciones: [Inscripcion]
    
  }
  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      fechaIngreso: Date
      proyecto: String!
      estudiante: String!
    ): Inscripcion
    
  }
`;

module.exports = tiposInscripcion;


