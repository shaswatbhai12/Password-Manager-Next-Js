import { getCards } from "@/actions/actions"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
 
export default async function CardList(){
    const cards = await getCards()

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Cards</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">

                {cards.length === 0 ? (
                    p.text-sm.text-muted-foreground
                )}
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">
                                {card.cardNumber}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Expires {card.expiryDate}
                            </p>

                            {/* <p className="text-sm text-muted-foreground">
                                CVV {card.cvv}
                            </p> */}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}