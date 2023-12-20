import Link from "next/link";

export default function Subscription(){
    return(
        <>
        <Link href='/subscription/plans'>Show All Plans</Link><br />
        <Link href='/subscription/manage'>Manage Subscription</Link><br />
        </>
    );
}