import { Next } from "@/components/Route/Next";
import UQManage from "@/components/UserQuestion/QuestionManage";
import { Metadata } from "next";



export const metadata:Metadata = {
  title: 'User Ouestion Manage'
}


export default function Manage() {
    return(
        <>
          <UQManage/>
          <Next path="manage/sent" btnName="Sent your question"/><br />
        </>
    );
}