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
    _id: ID!
    nombre: String!
    objetivosGenerales: [String]!
    objetivosEspecificos: [String]!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario
    # avances: [Avance]
    # inscripciones: [Inscripcion]
  }

  type Query {
    obtenerProyectos: [Proyecto]
    obtenerProyecto(_id: ID!): Proyecto
    obtenerProyectosLider(_id: ID!): [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      objetivosGenerales: [String]!
      objetivosEspecificos: [String]!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
    ): Proyecto

    editarProyecto(
      _id: ID!
      nombre: String
      objetivosGenerales: [String]
      objetivosEspecificos: [String]
      presupuesto: Float
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
    ): Proyecto
  }
`;

module.exports = tiposProyecto;
