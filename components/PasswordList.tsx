import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function PasswordList(){
    const passwords=[
        {
            website: "google.com",
            username: "shaswat@gmail.com",
            password: "******"
        },
        
        {
            website: "apple.com",
            username: "shaswat@apple.com",
            password: "******"
        }
    ];

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Passwords</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                {passwords.map((item, index) => (
                    <div key={index} className="rounded-lg border p-4">
                        <p className="font-medium">
                            {item.website}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Username: {item.username}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Password: {item.password}
                        </p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}