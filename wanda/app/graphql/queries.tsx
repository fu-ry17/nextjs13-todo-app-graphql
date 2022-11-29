import { graphql } from "../../src/gql";

export const MeDocument = graphql(/* GraphQL */`
   query Me{
    me {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`)

export const TodosDocument = graphql(/* GraphQL */`
   query Todos{
      todos {
        id
        title
        userId
        completed
        updatedAt
        createdAt
      }
    }
`)

export const TodoDocument = graphql(/* GraphQL */`
  query Todo($todoId: Int!){
    todo(id: $todoId) {
      id
      title
      userId
      completed
      createdAt
      updatedAt
    }
  }
`)