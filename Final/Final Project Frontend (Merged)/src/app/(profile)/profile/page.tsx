
import { GetCookieComponent } from "@/components/Cookies/CookiesComponent";
import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : 'Profile'
}

export default function Profile(){
const user: IUser = GetCookieObject('user');

return(
<div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800">
  <div className="p-8 bg-white rounded-lg shadow-md text-left">
    <h1 className="text-4xl font-extrabold text-sky-500 mb-4">Welcome, {user.username}</h1>
    <div className="bg-sky-500 h-1 w-20 mb-6"></div>
    <p className="text-lg font-bold text-gray-700 mb-2">Email:</p>
    <p className="text-lg text-gray-700 mb-4">{decodeURIComponent(user.email)}</p>
    <p className="text-lg font-bold text-gray-700 mb-2">Gender:</p>
    <p className="text-lg text-gray-700 mb-4">{user.gender}</p>
    <p className="text-lg font-bold text-gray-700 mb-2">Contact Number:</p>
    <p className="text-lg text-gray-700 mb-4">{user.phonenumber}</p>
    <p className="text-lg font-bold text-gray-700 mb-2">Role:</p>
    <p className="text-lg text-gray-700 mb-4">{user.role.toUpperCase()}</p>
    <button className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:shadow-outline-sky">
      Edit Profile
    </button>
  </div>
</div>
);
}

