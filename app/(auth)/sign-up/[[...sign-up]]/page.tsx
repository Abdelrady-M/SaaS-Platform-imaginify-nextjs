import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return <SignUp fallbackRedirectUrl ={'/'} path="/sign-up"/>
}

export default SignUpPage