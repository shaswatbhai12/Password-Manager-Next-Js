import { getPasswords } from "@/actions/actions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default async function PasswordList(){
    const passwords = await getPasswords()

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Passwords</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                {passwords.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No Passwords Added Yet</p>
                ) : (
                passwords.map((item, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-1">
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
                    </div>
                )))}
            </CardContent>
        </Card>
    )
}