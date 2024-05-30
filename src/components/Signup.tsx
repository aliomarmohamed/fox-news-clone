import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import fox from "../assets/fox.png"
import { auth } from "../firebase/setup"
import { useState } from "react"

const Signup = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const signup = async() =>{
    try{
      await  createUserWithEmailAndPassword(auth,email,password)
      onAuthStateChanged(auth,(user:any)=>{
        sendEmailVerification(user)
      })
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className="pl-32 pb-32">
      <div className="border border-spacing-1 w-96 
      h-11/12 mt-20 p-2 rounded-md ml-80 pb-20">
      <img src={fox} className="h-16 w-20 ml-36 mt-16"/>
      <h1 className="font-extrabold text-3xl text-center mt-8">Enter your email to get started!</h1>
      <input type="email" onChange={(e)=> setEmail(e.target.value)} className="mt-7 ml-14 border border-spacing-1 rounded-md p-3 h-14 w-64" placeholder="name@mydomain.com"/>
      <input type="password" onChange={(e)=> setPassword(e.target.value)} className="mt-2 ml-14 border border-spacing-1 rounded-md p-3 h-14 w-64" placeholder="Password"/>
      <br/>
      <button onClick={signup} className="mt-5 ml-14 h-14 w-64 bg-sky-900 text-white font-bold rounded-md">Create Account</button>
      <h1 className="text-xs text-center mt-5">By signing in, you are agreeing to Fox News <span className="font-bold">
        Terms<br/>of Service</span>and <span className="font-bold">Privacy Policy.</span></h1>
      </div>
    </div>
  )
}

export default Signup