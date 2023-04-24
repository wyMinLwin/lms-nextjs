'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import {ImAppleinc} from 'react-icons/im'
import {FcGoogle} from 'react-icons/fc'

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          { 0 < email.length && <label className='text-xs text-gray-500'>Email:</label>}
          <input
          onChange={(e) => setEmail(prev => prev = e.target.value)}
          id='email-input' className='p-1 form-outline outline-none' 
          value={email} type='email' placeholder='email' />
        </div>
        <div className='flex flex-col'>
          { 0 < password.length && <label className='text-xs text-gray-500'>Email:</label>}
          <input 
          onChange={(e) => setPassword(prev => prev = e.target.value)}
          className='p-1 form-outline' 
          value={password} type='password' placeholder='password' />
        </div>
        
        <Link className='text-xs text-gray-400' href={'/'}>forgot password?</Link>
        <button className='bg-red-500 p-1 border-2 border-red-500 rounded-3xl mx-2'>Sign In</button>
        <p className='text-xs text-gray-400'>New to Learn?</p>
        <button className='bg-white p-1 border-2 border-red-500 rounded-3xl mx-2'>
            <Link href={'/auth/sign-up'}>Sign Up Here</Link>
        </button>
        <button className='bg-white p-1 border-2 border-gray-800 rounded-3xl mx-2'>
            <Link className='flex flex-row justify-center items-center' href={'/'}>Sign In With Apple&nbsp;<ImAppleinc/> </Link>
        </button>
        <button className='bg-white p-1 border-2 border-gray-800 rounded-3xl mx-2'>
            <Link className='flex flex-row justify-center items-center' href={'/'}>Sign In With Google&nbsp;<FcGoogle /> </Link>
        </button>    
    </div>
  )
}

export default LoginForm