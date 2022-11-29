import { headers } from "next/headers"
import { graphqlClient } from "../src/graphql-client"
import CreateTodo from "./CreateTodo"
import { TodosDocument } from "./graphql/queries"
import Todos from "./Todos"
import { Auth } from "./utils/auth"

const Home = async () => {  
  Auth()
  const cookie = headers().get('cookie')
  const { todos } = await graphqlClient(cookie).request(TodosDocument)
  
  return (
    <div className="px-4 w-full">
      <CreateTodo />
      {
        todos.length > 0 ?  todos.map(t => <Todos key={t.id} t={t} />) : <h1 className="pt-4"> You currently have no todo </h1>
      }
    </div>
  )
}

export default Home