import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function About(){
    return(
        <main className="mx-auto max-w-4xl px-4 py-12">
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">About NoPass</h1>

                    <p className="mt-3 text-muted-foreground">
                        A Simple and Secure Place to manage your Password and Cards
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>What is NoPass</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="leading-7 text-muted-foreground">
                            NoPass is a Password Manager that help you keep the important login credentials and card information organized in one place
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Features</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>Store Your Password</li>
                            <li>Store your Card Details</li>
                            <li>User Authentication with Clerk</li>
                            <li>Light & Dark Mode</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Built with</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="leading-7 text-muted-foreground">
                            NoPass is built using Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod, and Clerk
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}