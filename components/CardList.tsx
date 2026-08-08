import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
 
export default function CardList(){
    const cards = [
        {
            cardNumber: "**** **** **** 1234",
            expiryDate: "12/27"
        },
        {
            cardNumber: "**** **** **** 5678",
            expiryDate: "11/28"
        },
    ];

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Cards</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">
                                {card.cardNumber}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Expires {card.expiryDate}
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}