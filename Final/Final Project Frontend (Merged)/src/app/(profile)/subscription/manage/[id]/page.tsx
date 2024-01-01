import { SubscriptionUpdate } from "@/components/Subscription/SubscriptionUpdate";

export default function Edit({params}:{params: {id: string}}){
    return(
        <SubscriptionUpdate id={params.id}/>
    );
}