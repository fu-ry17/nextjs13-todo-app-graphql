import { AuthRedirect } from '../utils/auth'
import RegisterForm from './RegisterForm'

const Register = () => {
  AuthRedirect()
  
  return (
    <div className='flex w-full h-screen justify-center items-center'>
       <RegisterForm />
    </div>
  )
}

export default Register