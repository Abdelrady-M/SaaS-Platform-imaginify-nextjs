import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp fallbackRedirectUrl ={'/'} path="/sign-up"/>;
}

export default SignUpPage