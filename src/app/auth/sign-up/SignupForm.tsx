'use client'
import Link from 'next/link'
import React,{useState} from 'react'

const SignupForm = () => {
    const [email,setEmail] = useState('');
    const [yourname,setYourname] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('')

  return (
    <div className='grid grid-flow-row gap-2 overflow-x-scroll'>
        <div className='flex flex-col'>
         { 0 < email.length && <label className='text-xs text-gray-500'>Email:</label>}
          <input
          onChange={(e) => setEmail(prev => prev = e.target.value)}
          id='email-input' className='p-1 form-outline outline-none' 
          value={email} type='email' placeholder='email' />
        </div>
        <div className='flex flex-col'>
          { 0 < yourname.length && <label className='text-xs text-gray-500'>Your name:</label>}
          <input
           onChange={(e) => setYourname(prev => prev = e.target.value)}
          id='your-name-input' className='p-1 form-outline outline-none' 
          value={yourname} type='text' placeholder='your name' />
        </div>
        <div className='flex flex-col'>
          { 0 < username.length && <label className='text-xs text-gray-500'>Username:</label>}
          <input 
          onChange={(e) => setUsername(prev => prev = e.target.value)}
          id='username-input' className='p-1 form-outline outline-none' 
          value={username} type='text' placeholder='username' />
        </div>
        <div className='flex flex-col'>
          { 0 < password.length && <label className='text-xs text-gray-500'>Password:</label>}
          <input 
          onChange={(e) => setPassword(prev => prev = e.target.value)}
          id='password-input' className='p-1 form-outline outline-none' 
          value={password} type='password' placeholder='password' />
        </div>
        <div className='flex flex-col'>
          { 0 < repassword.length && <label className='text-xs text-gray-500'>Re-enter password:</label>}
          <input
          onChange={(e) => setRepassword(prev => prev = e.target.value)}
          id='re-enter-input' className='p-1 form-outline outline-none' 
          value={repassword} type='password' placeholder='re-enter password' />
        </div>
        <button className='bg-red-500 p-1 border-2 border-red-500 rounded-3xl mx-2'>Sign Up</button>
        <p className='text-xs text-gray-400'>Already have an account?</p>
        <button className='bg-white p-1 border-2 border-red-500 rounded-3xl mx-2'>
            <Link href={'/auth/login'}>Login Here</Link>
        </button>

    </div>
  )
}

export default SignupForm