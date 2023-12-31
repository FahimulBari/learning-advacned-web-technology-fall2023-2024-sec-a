import { GoThere } from "@/components/Route/GoThere";
import SubscriptionManage from "@/components/Subscription/SubscriptionManage";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Subscription Manage'
}


export default function Manage() {
    return(
          <SubscriptionManage/>
    );
}