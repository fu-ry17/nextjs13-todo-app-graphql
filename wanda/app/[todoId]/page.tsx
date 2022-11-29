import { headers } from 'next/headers'
import React from 'react'
import { graphqlClient } from '../../src/graphql-client'
import { TodoDocument } from '../graphql/queries'
import { Auth } from '../utils/auth'
import TodoDetails from './TodoDetails'

const Todo = async ({ params }: { params: { todoId: string }}) => {
  Auth()
  const cookie = headers().get('cookie')
  const { todo } = await graphqlClient(cookie).request(TodoDocument, { todoId: parseInt(params.todoId)})

  if(!todo) return <h1> No Todo was found! </h1>

  return (
    <div className='px-4 py-2'>
        Todo {params.todoId}
        <TodoDetails todo={todo} />
    </div>
  )
}

export default Todo