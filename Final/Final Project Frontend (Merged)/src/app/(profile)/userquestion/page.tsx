import { IfUser } from "@/components/Auth/AuthCheck";
import Link from "next/link";

export default function UserQuestion(){
    IfUser();
    return(

        <>
        <Link href="/userquestion/manage">See all your questions</Link><br/>
        </>
    );
}