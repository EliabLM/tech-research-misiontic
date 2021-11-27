const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  enum Enum_EstadoUsuario {
    PENDIENTE
    NO_AUTORIZADO
    AUTORIZADO
  }

  enum Enum_Rol {
    ADMINISTRADOR
    LIDER
    ESTUDIANTE
  }

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

  type Usuario {
    _id: ID
    identificacion: String!
    nombre: String!
    apellido: String!
    email: String!
    password: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
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
    obtenerUsuarios(rol: Enum_Rol!): [Usuario]
    obtenerUsuario(_id: ID!): Usuario

    obtenerProyectos: [Proyecto]
    obtenerProyecto(_id: ID!): Proyecto
  }

  type Mutation {
    # ========== USUARIOS ==========
    crearUsuario(
      identificacion: String!
      nombre: String!
      apellido: String!
      email: String!
      password: String!
      rol: Enum_Rol!
    ): Usuario

    editarUsuario(
      _id: ID!
      identificacion: String
      nombre: String
      apellido: String
      email: String
      password: String
    ): Usuario

    cambiarEstadoUsuario(
      rol: Enum_Rol!
      _id: ID!
      estado: Enum_EstadoUsuario!
    ): Usuario

    eliminarUsuario(_id: ID!): Usuario

    # ========== PROYECTOS ==========
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

module.exports = typeDefs;
