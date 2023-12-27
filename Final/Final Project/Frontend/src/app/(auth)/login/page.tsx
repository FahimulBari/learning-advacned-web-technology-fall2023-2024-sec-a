import { LoginFormValidate } from "@/components/Auth/LoginFormValidate";

export const metadata = {
    title: "Login",
    description: "This is login page"
}

export default function Login(){
    return(
        <div>
            <h1 className="text-xl">Login Form</h1>
            <LoginFormValidate/>
        </div>
    );
}