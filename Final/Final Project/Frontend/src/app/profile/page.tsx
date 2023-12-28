
import { GetCookieComponent } from "@/components/Cookies/CookiesComponent";
import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import { Metadata } from "next";
import Link from "next/link";
import { IsAdmin } from "@/components/Auth/AuthCheck";
import Logout from "@/components/Auth/Logout";

export const metadata : Metadata = {
  title : 'Profile'
}

export default function Profile(){

    if(IsAdmin()){ 
      return(
        <AdminProfile/>
        );
    }else{
      return(
        <UserProfile/>
        );
    }  
}

export const AdminProfile = () => {
  const user: IUser = GetCookieObject('user');

  return(
    <div>
      <Link href='/subscription/manage'>Subscription Manage</Link> <br />
      <Link href='/search'>Search User</Link> <br />
      Email Is: {decodeURIComponent(user.email)} <br />
      Name Is: {user.username} <br />
      Role Is: {user.role}
      <GetCookieComponent name="token"/>
      <Logout/>
    </div>
);
}

export const UserProfile = () => {
  const user: IUser = GetCookieObject('user');

  return(
    <div>
      <Link href='/subscription/plans'>Subscription Plans</Link> <br />
      <Link href='/payment'>Payment Method</Link> <br />
      Email Is: {decodeURIComponent(user.email)} <br />
      Name Is: {user.username} <br />
      Role Is: {user.role}
      <GetCookieComponent name="token"/>
      <Logout/>
    </div>
);
}
