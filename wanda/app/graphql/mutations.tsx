import { graphql } from "../../src/gql";

export const LoginDocument = graphql(/* GraphQL */`
  mutation Login($inputs: LoginInput!){
  login(inputs: $inputs) {
      user {
        id
        username
      }
      errors {
        field
        message
        }
      }
  }
`)

export const RegisterDocument = graphql(/* GraphQL */`
  mutation Register($inputs: RegisterInput!){
  register(inputs: $inputs) {
    user {
      id
    }
    errors {
      field
      message
    }
   }
  }
`)

export const LogOutDocument = graphql(/* GraphQL */`
    mutation Logout{
    logout
   }
`)

export const CreateTodoDocument = graphql(/* GraphQL */`
  mutation CreateTodo($title: String!){
    createTodo(title: $title) {
      id
    }
  }
`)

export const CompleteTodoDocument = graphql(/* GraphQL */`
  mutation CompleteTodo($completed: Boolean!, $completeTodoId: Int!){
    completeTodo(completed: $completed, id: $completeTodoId)
  }
`)

export const DeleteTodoDocument = graphql(/* GraphQL */`
  mutation DeleteTodo($deleteTodoId: Int!){
    deleteTodo(id: $deleteTodoId)
  }
`)

export const UpdateTodoDocument = graphql(/* GraphQL */`
  mutation UpdateTodo($title: String!, $updateTodoId: Int!){
    updateTodo(title: $title, id: $updateTodoId)
  }
`)