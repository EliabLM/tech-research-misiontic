const { gql } = require('apollo-server');

const tiposAvance = gql`
  scalar Date

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_Rol {
    ADMINISTRADOR
    LIDER
    ESTUDIANTE
  }

  type Avance {
    idProyecto: _id!    
    fechaAvance: Date!
    descripcion: String!
    observacionesLider: String!
    estudiante: Usuario!        
  }

type Query {
    obtenerAvance: [Avance]
    obtenerAvance(_id: ID!): Avance
  }

  type Mutation {
    crearAvance(
      rol: Enum_Rol!      
      fechaAvance: Date!
      descripcion: String!
      estudiante: String!
    ): Avance

    editarAvance(
      rol: Enum_Rol!
      _id: ID!      
      observacionesLider: String!
      lider: String!      
    ): Avance
  } 

`;

module.exports = tiposAvance;