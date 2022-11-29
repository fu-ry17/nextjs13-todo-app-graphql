'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'
import { Todo } from '../../../src/gql/graphql'
import { graphqlClient } from '../../../src/graphql-client'
import { UpdateTodoDocument } from '../../graphql/mutations'

const UpdateTodo: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [title, setTitle] = useState('')
  const router = useRouter()

  useEffect(()=> {
    if(todo){
        setTitle(todo.title)
    }
  },[todo])

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    if(!title) return
    await graphqlClient().request(UpdateTodoDocument, { title, updateTodoId: todo.id })
    router.refresh()
    setTimeout(()=> router.push('/'), 5)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}
        placeholder='Add Todo...' 
        className='my-2 p-1 border border-gray-400 hover:border-gray-800 outline-none rounded-md' />
        <button className='text-gray-100 bg-gray-800 hover:bg-gray-400 py-1 px-3 my-4 rounded-md tracking-wider'
         type='submit'> Update Todo </button>
    </form>
  )
}

export default UpdateTodo
