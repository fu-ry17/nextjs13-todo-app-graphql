import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const AuthRedirect = () => {
   const cookie = headers().get('cookie')

   if(cookie){
      redirect('/')
   }
}


export const Auth = () => {
   const cookie = headers().get('cookie')
   
   if(!cookie){
      redirect('/login')
   }
}

