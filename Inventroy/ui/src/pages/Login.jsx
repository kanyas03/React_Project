import React,{useState} from 'react'
import image from '../assets/images/Group.svg'
import {useNavigate,Link} from 'react-router-dom'

function Login() {
  const [userName,setUserName]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const navigate=useNavigate();

const handleLogin=async (e)=>{
  e.preventDefault();
  try
  {
    const response=await fetch('/api/login',{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({UserName: userName,Password:password}),
    });
    if(!response.ok){
      const errData=await response.json();
      throw new Error(errData.msg || 'Login failed')
    }
    navigate('/home');
  }
  catch(err){
      setError(error.message || 'Invalid Credentials : Please try again!');
  }
}
  return (
    <body className="bg-indigo-950 fixed">
    <div className="md:flex md:justify-between  space-x-2">
        <div><h1 className="text-6xl text-amber-200 pt-[50px] ml-5">CareWare</h1>
        <h3 className="text-xl text-white ml-5">Hospital Inventory Management</h3>
        <img src={image} className="  pr-[200px] md:w-[650px] pt-[80px] md:pl-[60px]"></img>
        </div>
    <div  className="mt-[50px]">
     <h1 className=" mt-[50px] pl-[120px] text-4xl text-white font-extrabold">Login</h1>
    <form className="pt-5 pr-[80px]" onSubmit={handleLogin}>
        <label className="text-white text-xl" >UserName :</label><br></br>
        <input type="email" className="w-[350px] bg-white hover:ring-2" value={password} onChange={(e)=> setUserName (e.target.value)}></input><br></br><br></br>
        <label className="text-white text-xl">Password :</label><br></br>
        <input type="password" className="w-[350px] bg-white hover:ring-2" value={password} onChange={(e)=> setPassword (e.target.value)}></input><br></br><br></br>
        <button className="bg-slate-400 text-xl w-[350px] hover:ring-2"><a href="home.html">Login</a></button><br></br><br></br>
        <a href="Forget Password?" className="text-amber-300 ml-[100px]">Forget Password?</a>
        <p className="text-white ml-[80px]">Don’t you have an account?</p>
        <Link to="/signup" className="text-amber-300 ml-[150px]">SignUp</Link>
     </form>
    </div>
    </div>
</body>
  )
}

export default Login