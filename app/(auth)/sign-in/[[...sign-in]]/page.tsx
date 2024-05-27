import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return <SignIn fallbackRedirectUrl={'/'} path="/sign-in"/>;
}

export default SignInPage