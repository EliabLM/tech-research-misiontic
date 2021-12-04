const { gql } = require('apollo-server');

const tiposUsuario = gql`
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

  type Query {
    obtenerUsuarios: [Usuario]
    obtenerUsuario(_id: ID!): Usuario
    obtenerEstudiantes: [Usuario]
  }

  type Mutation {
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

    cambiarEstadoUsuario(_id: ID!, estado: Enum_EstadoUsuario!): Usuario

    eliminarUsuario(_id: ID!): Usuario
  }
`;

module.exports = tiposUsuario;
