import { AuthRedirect } from '../utils/auth'
import LoginForm from './LoginForm'

const Login = () => {
  AuthRedirect()
  
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <LoginForm />
    </div>
  )
}

export default Login