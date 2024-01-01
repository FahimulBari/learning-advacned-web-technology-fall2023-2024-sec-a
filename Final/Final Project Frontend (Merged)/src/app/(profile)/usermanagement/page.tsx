import { IsAdmin } from "@/components/Auth/AuthCheck";
import Link from "next/link";

export default function UserManagement(){
    IsAdmin();
    return(
        <>
        <Link href="/usermanagement/manage">Show all Users</Link><br/>
        </>
    );
}