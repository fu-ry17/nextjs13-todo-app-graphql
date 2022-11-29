import { GraphQLClient } from "graphql-request";

export const graphqlClient = (cookie?: any) => 
    new GraphQLClient("http://localhost:4000/graphql",
   { credentials: "include", mode: "cors", headers: cookie ? { cookie } : undefined})
