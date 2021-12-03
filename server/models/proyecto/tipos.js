const { gql } = require('apollo-server');

const tiposProyecto = gql`
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

  type Proyecto {
    _id: ID
    nombre: String!
    objetivosGenerales: [String]!
    objetivosEspecificos: [String]!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
  }

  type Query {
    obtenerProyectos: [Proyecto]
    obtenerProyecto(_id: ID!): Proyecto
  }

  type Mutation {
    crearProyecto(
      rol: Enum_Rol!
      nombre: String!
      objetivosGenerales: [String]!
      objetivosEspecificos: [String]!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
    ): Proyecto

    editarProyecto(
      rol: Enum_Rol!
      _id: ID!
      estado: Enum_EstadoProyecto!
      nombre: String
      objetivosGenerales: [String]
      objetivosEspecificos: [String]
      presupuesto: Float
      fechaInicio: Date
      fechaFin: Date
    ): Proyecto
  }
`;

module.exports = tiposProyecto;
