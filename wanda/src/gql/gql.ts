/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation Login($inputs: LoginInput!){\n  login(inputs: $inputs) {\n      user {\n        id\n        username\n      }\n      errors {\n        field\n        message\n        }\n      }\n  }\n": types.LoginDocument,
    "\n  mutation Register($inputs: RegisterInput!){\n  register(inputs: $inputs) {\n    user {\n      id\n    }\n    errors {\n      field\n      message\n    }\n   }\n  }\n": types.RegisterDocument,
    "\n    mutation Logout{\n    logout\n   }\n": types.LogoutDocument,
    "\n  mutation CreateTodo($title: String!){\n    createTodo(title: $title) {\n      id\n    }\n  }\n": types.CreateTodoDocument,
    "\n  mutation CompleteTodo($completed: Boolean!, $completeTodoId: Int!){\n    completeTodo(completed: $completed, id: $completeTodoId)\n  }\n": types.CompleteTodoDocument,
    "\n  mutation DeleteTodo($deleteTodoId: Int!){\n    deleteTodo(id: $deleteTodoId)\n  }\n": types.DeleteTodoDocument,
    "\n  mutation UpdateTodo($title: String!, $updateTodoId: Int!){\n    updateTodo(title: $title, id: $updateTodoId)\n  }\n": types.UpdateTodoDocument,
    "\n   query Me{\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.MeDocument,
    "\n   query Todos{\n      todos {\n        id\n        title\n        userId\n        completed\n        updatedAt\n        createdAt\n      }\n    }\n": types.TodosDocument,
    "\n  query Todo($todoId: Int!){\n    todo(id: $todoId) {\n      id\n      title\n      userId\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n": types.TodoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($inputs: LoginInput!){\n  login(inputs: $inputs) {\n      user {\n        id\n        username\n      }\n      errors {\n        field\n        message\n        }\n      }\n  }\n"): (typeof documents)["\n  mutation Login($inputs: LoginInput!){\n  login(inputs: $inputs) {\n      user {\n        id\n        username\n      }\n      errors {\n        field\n        message\n        }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($inputs: RegisterInput!){\n  register(inputs: $inputs) {\n    user {\n      id\n    }\n    errors {\n      field\n      message\n    }\n   }\n  }\n"): (typeof documents)["\n  mutation Register($inputs: RegisterInput!){\n  register(inputs: $inputs) {\n    user {\n      id\n    }\n    errors {\n      field\n      message\n    }\n   }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Logout{\n    logout\n   }\n"): (typeof documents)["\n    mutation Logout{\n    logout\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTodo($title: String!){\n    createTodo(title: $title) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTodo($title: String!){\n    createTodo(title: $title) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CompleteTodo($completed: Boolean!, $completeTodoId: Int!){\n    completeTodo(completed: $completed, id: $completeTodoId)\n  }\n"): (typeof documents)["\n  mutation CompleteTodo($completed: Boolean!, $completeTodoId: Int!){\n    completeTodo(completed: $completed, id: $completeTodoId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTodo($deleteTodoId: Int!){\n    deleteTodo(id: $deleteTodoId)\n  }\n"): (typeof documents)["\n  mutation DeleteTodo($deleteTodoId: Int!){\n    deleteTodo(id: $deleteTodoId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTodo($title: String!, $updateTodoId: Int!){\n    updateTodo(title: $title, id: $updateTodoId)\n  }\n"): (typeof documents)["\n  mutation UpdateTodo($title: String!, $updateTodoId: Int!){\n    updateTodo(title: $title, id: $updateTodoId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query Me{\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n   query Me{\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query Todos{\n      todos {\n        id\n        title\n        userId\n        completed\n        updatedAt\n        createdAt\n      }\n    }\n"): (typeof documents)["\n   query Todos{\n      todos {\n        id\n        title\n        userId\n        completed\n        updatedAt\n        createdAt\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Todo($todoId: Int!){\n    todo(id: $todoId) {\n      id\n      title\n      userId\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query Todo($todoId: Int!){\n    todo(id: $todoId) {\n      id\n      title\n      userId\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;