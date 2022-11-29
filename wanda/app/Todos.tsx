'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Todo } from '../src/gql/graphql'
import { graphqlClient } from '../src/graphql-client'
import { CompleteTodoDocument } from './graphql/mutations'
import { deleteTodo } from './[todoId]/TodoDetails'

const handleComplete = async (todo: Todo, refresh: ()=> void) => {
  await graphqlClient().request(CompleteTodoDocument, { completed: !todo.completed, completeTodoId: todo.id})
  refresh()
}

const Todos: React.FC<{ t: Todo }>= ({ t }) => {
  const router = useRouter()

  return (
    <div className='flex gap-x-4' >
        <input type='checkbox' checked={t.completed} onChange={() => handleComplete(t, router.refresh)}  />
        <div className='flex justify-between w-full'>
          <Link href={`/${t.id}`}>
            <p className={`${t.completed && 'line-through'} py-2`}>  {t.title} </p> 
          </Link>

          <div className='flex items-center gap-x-2'>
            <Link href={`/edit/${t.id}`}> <button> update </button></Link>
            <button onClick={()=> deleteTodo(t.id, router)}> delete </button>
          </div>
        </div>
    </div>
  )
}

export default Todos
