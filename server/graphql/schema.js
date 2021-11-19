const { gql } = require('apollo-server');

const typeDefs = gql`
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
    getUsuarios: [Usuario]
  }

  type Mutation {
    crearUsuario(
      _id: ID
      identificacion: String!
      nombre: String!
      apellido: String!
      email: String!
      password: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: ID!
      identificacion: String
      nombre: String
      apellido: String
      email: String
      password: String
      rol: Enum_Rol
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String!): Usuario
  }
`;

module.exports = typeDefs;
