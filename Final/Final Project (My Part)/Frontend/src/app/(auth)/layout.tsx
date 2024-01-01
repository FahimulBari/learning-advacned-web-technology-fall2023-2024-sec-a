import Link from "next/link";

export default function AuthLayout({children}:{children:any}){
    return(
    <div>
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/">
                <span className="text-orange-400 font-bold text-lg">Template Market Place</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="/login">
                <span className="text-white font-semibold cursor-pointer">Login</span>
            </Link>
            <Link href="/signup">
                <span className="text-white font-semibold cursor-pointer">Signup</span>
            </Link>
            </div>
        </div>
        {children}
    </div>
    );
}