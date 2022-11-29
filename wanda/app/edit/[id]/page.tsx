import { headers } from 'next/headers'
import { graphqlClient } from '../../../src/graphql-client'
import { TodoDocument } from '../../graphql/queries'
import { Auth } from '../../utils/auth'
import UpdateTodo from './UpdateTodo'

const EditTodo = async ({ params}: { params: { id: string }}) => {
  Auth()
  const cookie = headers().get('cookie')
  const { todo } = await graphqlClient(cookie).request(TodoDocument, { todoId: parseInt(params.id )}) 
  
  if(!todo) return <h1 className='px-4'> No Todo was found!  </h1>

  return (
    <div className='px-4'>
        <h1> Todo {todo.id}</h1>
        <UpdateTodo todo={todo} />
    </div>
  )
}

export default EditTodo