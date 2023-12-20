import { GoThere } from "@/components/Route/GoThere";

export default function Home() {
  return (
    <main>
      <h1>Welcome, Our Market Place</h1>
      <GoThere path="/subscription" btnName="Go To Subscription Module"/>
    </main>
  )
}
