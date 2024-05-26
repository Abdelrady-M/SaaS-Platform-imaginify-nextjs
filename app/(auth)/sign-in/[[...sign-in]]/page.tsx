import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
    return <SignIn fallbackRedirectUrl={'/'} path="/sign-in"/>
}

export default SignInPage