import { headers } from 'next/headers'
import { graphqlClient } from '../src/graphql-client'
import '../styles/globals.css'
import { MeDocument } from './graphql/queries'
import Logout from './Logout'

export default async function RootLayout({ children}: { children: React.ReactNode }) {
  const cookie = headers().get('cookie')
  const { me } = await graphqlClient(cookie).request(MeDocument)

  return (
    <html>
      <head />
      <body className='max-w-lg mx-auto'>
        <div className='flex justify-between px-4'>
          <h1> Todo </h1>

          <div className='flex gap-x-3 items-center'>
            {me?.username}
            {me?.id ? <Logout /> : null }
          </div>
          
        </div>
        {children}
      </body>
    </html>
  )
}
