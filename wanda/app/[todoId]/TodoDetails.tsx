'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Todo } from '../../src/gql/graphql'
import { graphqlClient } from '../../src/graphql-client'
import { DeleteTodoDocument } from '../graphql/mutations'

export const deleteTodo = async(id: number, router: any) => {
   await graphqlClient().request(DeleteTodoDocument, { deleteTodoId: id })
   router.push('/')
}

const TodoDetails: React.FC<{ todo: Todo }> = ({ todo }) => {
  const router = useRouter()

  return (
    <div>
        <p className={`${todo.completed && 'line-through'} py-2`}>  {todo.title} </p> 
        <p className='pb-2'> completed: {todo.completed ? 'true' : 'false'}</p>

        <div className='flex gap-x-3'>
          <Link href={`/edit/${todo.id}`}> update </Link>
            <button onClick={async()=> {
               await deleteTodo(todo.id, router)
            }}> delete </button>
        </div>
    </div>
  )
}

export default TodoDetails