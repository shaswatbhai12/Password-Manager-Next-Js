"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function AddCard(){
    const [cardNumber, setCardNumber ] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("Card Added", {
            cardNumber,
            expiryDate,
            cvv,
        });

        setCardNumber("");
        setExpiryDate("");
        setCvv("");
    };

    return(
        <Card>
            <CardHeader>
                <CardTitle>Add New Card</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input type="text" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} id="cardNumber" />
                    </div>

                        <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input type="text" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} id="cardNumber" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input type="text" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} id="cvv" />
                        </div>

                    <Button type="submit" className="w-full">
                        Add Card
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}