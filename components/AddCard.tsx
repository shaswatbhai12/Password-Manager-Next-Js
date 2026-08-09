"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { addCardServer } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const cardSchema = z.object({
    cardNumber: z.string().min(16, "Card Number must be at least 16 digit").max(19, "Card Number is too long"),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY Format"),
    cvv: z.string().regex(/^\d{3,4}$/, "CVV must be of 3 to 4 digits"),
});

type CardFormData = z.infer<typeof cardSchema>;

export default function AddCard(){
    const{register, handleSubmit, reset, formState: { errors },} = useForm<CardFormData>({
        resolver: zodResolver(cardSchema),
        defaultValues: {
            cardNumber: "",
            expiryDate: "",
            cvv: ""
        }
    })

    const onSubmit =  async (data: CardFormData) => {
        try{
            await addCardServer(
                data.cardNumber,
                data.expiryDate,
                Number(data.cvv)
            );

            console.log("Card Added:", data);
            toast.success("Card Added Successfully")
            reset();
        } catch(error){
            console.log(error)
            toast.error("Failed to Add Card")
        }
    };

    return(
        <Card>
            <CardHeader>
                <CardTitle>Add New Card</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input type="text" placeholder="1234 5678 9012 3456" {...register("cardNumber")} id="cardNumber" />

                        {errors.cardNumber && (
                            <p className="text-sm text-destructive">
                                {errors.cardNumber.message}
                            </p>
                        )}
                    </div>

                        <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input type="text" placeholder="MM/YY" {...register("expiryDate")} id="cardNumber" />
                            {errors.expiryDate && (
                                <p className="text-sm text-destructive">
                                    {errors.expiryDate.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input type="text" placeholder="123" {...register("cvv")} id="cvv" />
                            {errors.cvv && (
                                <p className="text-sm text-destructive">
                                    {errors.cvv.message}
                                </p>
                            )}
                        </div>

                    <Button type="submit" className="w-full">
                        Add Card
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}