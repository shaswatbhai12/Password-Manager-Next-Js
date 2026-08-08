import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import AddCard from "@/components/AddCard"
import AddPassword from "@/components/AddPassword";
import CardList from "@/components/CardList";
import PasswordList from "@/components/PasswordList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoPass - Home",
  description: "This is HomePage of my Password Manager"
}

export default function Home() {
  return (
    <>  
      <main className="container mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-10 text-center text-4xl font-bold">Password Manager</h1>

        <section className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Add a Credit Card</h2>
              <AddCard />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Add a Password</h2>
              <AddPassword />
            </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Your Cards</h2>
            <CardList />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Your Passwords</h2>
            <PasswordList />
          </div>
        </section>        
      </main>  
    </>
  );
}
