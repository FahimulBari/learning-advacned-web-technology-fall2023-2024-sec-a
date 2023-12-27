import { SignupFormValidate } from "@/components/Auth/SignupForm";


export const metadata = {
    title: "Signup",
    description: "This is sign up page"
}

export default function Login(){
    return(
        <div>
            <h1>Signup Form</h1>
            <SignupFormValidate/>
        </div>
    );
}