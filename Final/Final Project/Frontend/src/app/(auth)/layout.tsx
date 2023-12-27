import Link from "next/link";

export default function AuthLayout({children}:{children:any}){
    return(
        <div>
            <Link className="text-sky-500" href={'/login'}>Login</Link> <br />
            <Link className="text-sky-500" href={'/signup'}>Signup</Link>
            {children}
        </div>
    );
}