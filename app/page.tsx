import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <>  
      <main className="container mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-10 text-center text-4xl font-bold">Password Manager</h1>

        <section className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Add a Credit Card
            </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="cardNumber" className="mb-2 block">Card Number</Label>
                <Input placeholder="1234 5678 9812 3456" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="mb-2 block">Expiry Date</Label>
                  <Input placeholder="01/27" />
                </div>

                <div>
                  <Label htmlFor="cvv" className="mb-2 block">CVV</Label>
                  <Input placeholder="123" />
                </div>
              </div>

              <Button className="w-full">Add Card</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Add a Password
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="spae-y-2">
                <Label htmlFor="website">Website</Label>
                <Input placeholder="example.com"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input placeholder="shaswat" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" placeholder="******"/>
              </div>

              <Button className="w-full">
                Add Password
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Cards</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border bg-muted px-4 py-3">
                <span>**** **** ***** 1567</span>
                <span className="text-sm text-muted-foreground">
                  12/26
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg border bg-muted px-4 py-3">
                <span>**** **** **** 5678</span>
                <span className="text-sm text-muted-foreground">
                  11/26
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border bg-muted px-4 py-3">
                <h3 className="font-medium">example.com</h3>
                <p className="text-sm text-muted-foreground">manisha</p>
              </div>

              <div className="rounded-lg border bg-muted px-4 py-3">
                <h3 className="font-medium">google.com</h3>
                <p className="text-sm text-muted-foreground">shaswat</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>  
    </>
  );
}
