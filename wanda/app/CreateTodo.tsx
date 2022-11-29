'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { graphqlClient } from '../src/graphql-client'
import { CreateTodoDocument } from './graphql/mutations'

const CreateTodo = () => {
   const [title, setTitle] = useState('')
   const router = useRouter()

   const handleSubmit = async(e: FormEvent) => {
     e.preventDefault()
     await graphqlClient().request(CreateTodoDocument, { title }) // not ssr so no need to forward cookie
     setTitle('')
     router.refresh()
   }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
       <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} 
       placeholder="Add Todo..."
       className='my-2 p-1 border border-gray-400 hover:border-gray-800 outline-none rounded-md'/>
       <button className='text-gray-100 bg-gray-800 hover:bg-gray-400 py-1 px-3 my-4 rounded-md tracking-wider'> Add Todo </button>
    </form>
  )
}

export default CreateTodo