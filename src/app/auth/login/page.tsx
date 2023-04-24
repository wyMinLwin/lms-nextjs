import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm'
export const metadata = {
    title: 'Login',
}

function page() {
  return (
    <LoginForm />
  )
}

export default page