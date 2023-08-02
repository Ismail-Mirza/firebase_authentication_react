import React,{useState} from 'react'
import { auth,googleProvider } from '../firebase/config'
import { createUserWithEmailAndPassword,signOut,signInWithPopup} from 'firebase/auth'

type LoginFormType = {
    email: string,
    password: string
}

const Login = () => {
  const initialData:LoginFormType = Object.freeze(
    {
        email:"",
        password:"",
    }
  )
  console.log(auth.currentUser?.email)
  const [formData,setFormData] = useState<LoginFormType>(initialData)
  const handleChange = (e:any)=>{

       setFormData({
            ...formData,
            [e.target.name]:e.target.value
       })


  }
  const signIn = async() => {
     try {
      await createUserWithEmailAndPassword(auth,formData.email,formData.password);
     } catch (error) {
        console.error(error);
     }

  };
  const logOut = async() => {
       await signOut(auth);
  };
  const signWithGoogle = async() => {
    try {
        await signInWithPopup(auth,googleProvider)
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
        <input name='email' onChange={handleChange} type="email" placeholder='enter your email' />
        <input name='password' onChange={handleChange} type="password" placeholder='enter your password' />
        <button onClick={signIn}>Sign Up</button>
        <button onClick={signWithGoogle}>Sign up with google</button>
        <button onClick={logOut}>Signout</button>
    </div>
  )
}

export default Login