'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { graphqlClient } from '../src/graphql-client'
import { LogOutDocument } from './graphql/mutations'

const Logout = () => {
  const router = useRouter()

  return (
    <div>
        <button onClick={async()=> {
          await graphqlClient().request(LogOutDocument)
          router.refresh()
          setTimeout(()=> router.push('/login'), 5)
        }}> logout </button>
    </div>
  )
}

export default Logout