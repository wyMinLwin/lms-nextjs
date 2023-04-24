import Link from 'next/link'
import React from 'react'
import SignupForm from './SignupForm'

export const metadata = {
    title: 'Sign-Up',
}

function page() {
  return (
    <SignupForm />
  )
}

export default page