import { Next } from "@/components/Route/Next";
import FaqManage from "@/components/Faq/FaqManage";
import { Metadata } from "next";
import UserManage from "@/components/UserManagement/UserManage";


export const metadata:Metadata = {
  title: 'User Manage'
}


export default function Manage() {
    return(
        <>
          <UserManage/>
          <Next path="manage/add" btnName="Add User"/><br />
        </>
    );
}