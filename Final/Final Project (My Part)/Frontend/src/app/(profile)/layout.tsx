import { IsAdmin } from "@/components/Auth/AuthCheck";
import { LogoutComponent } from "@/components/Auth/Logout";
import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import Link from "next/link";

export default function ProfileLayout({children}:{children:any}){

    if(IsAdmin()){ 
        return(
            <div>          
                <AdminProfile/>
                {children}
            </div>
          );
      }else{
        return(
            <div>
                <UserProfile/>
                {children}
            </div>
          );
      }

    return(
    <div>
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/profile">
                <span className="text-orange-400 font-bold text-lg">Template Market Place</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="/login">
                <span className="text-sky-400 cursor-pointer">Login</span>
            </Link>
            <Link href="/signup">
                <span className="text-sky-400 cursor-pointer">Signup</span>
            </Link>
            <Link href="/profile">
                <span className="text-sky-400 cursor-pointer">Profile</span>
            </Link>
            </div>
        </div>
        {children}
    </div>
    );
}

{/* <Link href='/subscription/plans' className="text-blue-500 hover:underline">Subscription Plans</Link> <br />
<Link href='/payment' className="text-blue-500 hover:underline">Payment Method</Link> <br />
<Link href='/template/show'  className="text-blue-500 hover:underline">See Template</Link> <br /> */}

export const AdminProfile = () => {
    return(
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/profile">
                <span className="text-orange-400 font-bold text-lg">Template Market Place</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="/subscription/manage">
                <span className="text-white font-semibold cursor-pointer">Subscription</span>
            </Link>
            <Link href="/search">
                <span className="text-white font-semibold cursor-pointer">User</span>
            </Link>
            <Link href="/template/manage">
                <span className="text-white font-semibold cursor-pointer">Template</span>
            </Link>
            <LogoutComponent/>
            </div>
        </div>
  );
  }

  export const UserProfile = () => {
  
    return(
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/profile">
                <span className="text-orange-400 font-bold text-lg">Template Market Place</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="/subscription/plans">
                <span className="text-white font-semibold cursor-pointer">Plans</span>
            </Link>
            <Link href="/payment">
                <span className="text-white font-semibold cursor-pointer">Payment</span>
            </Link>
            <Link href="/template/show">
                <span className="text-white font-semibold cursor-pointer">Template</span>
            </Link>
            <LogoutComponent/>
            </div>
        </div>
  );
  }
  