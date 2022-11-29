'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { graphqlClient } from '../../src/graphql-client'
import { RegisterDocument } from '../graphql/mutations'

const RegisterForm = () => {
  const [ data, setData] = useState({ username: '', email: '', password: ''})
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , value} = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const res = await graphqlClient().request(RegisterDocument, { inputs: data })
    if(res.register.errors){
      console.log(res.register.errors) // errors displayed in the console
    }else if(res.register.user){
      router.refresh()
    } 
  }

  return (
    <form onSubmit={handleSubmit} className='px-4'>
         <h1 className='text-2xl mb-4'> Register </h1>
        <input type="text" placeholder='username' name='username' value={data.username}
         onChange={handleChange} autoComplete="off"
         className='w-full my-2 p-2 border border-gray-400 hover:border-gray-800 outline-none rounded-md'  />
        <input type="text" placeholder='email' name='email' value={data.email}
         onChange={handleChange} autoComplete="off" 
         className='w-full my-2 p-2 border border-gray-400 hover:border-gray-800 outline-none rounded-md' />
        <input type="password" placeholder='password' name='password' value={data.password}
        onChange={handleChange} autoComplete="off" 
        className='w-full my-2 p-2 border border-gray-400 hover:border-gray-800 outline-none rounded-md' />
        <button className='w-full text-center text-gray-100 bg-gray-800 hover:bg-gray-400 py-2 my-4 rounded-md tracking-wider'> Register </button>
        <Link href='/login'> Already have an account? login </Link>
    </form>
  )
}

export default RegisterForm