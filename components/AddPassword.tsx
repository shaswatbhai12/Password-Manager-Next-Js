"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addPasswordServer } from "@/actions/actions"
import toast from "react-hot-toast"

const PasswordSchema = z.object({
    website: z.string().min(1, "Website is Required"),
    username: z.string().min(1, "UserName is Required"),
    password: z.string().min(1, "Password is Required").min(6, "Password is required")
})

type PasswordFormData = z.infer<typeof PasswordSchema>;

export default function AddPassword(){
    const router = useRouter();
    const { register, handleSubmit, reset, formState: {errors}, } = useForm<PasswordFormData>({
        resolver: zodResolver(PasswordSchema),

        defaultValues: {
            website: "",
            username: "",
            password: ""
        }
    });

    const onSubmit = async(data: PasswordFormData) => {
        try{
            await addPasswordServer(
                data.website,
                data.username,
                data.password
            )

            console.log("Password Added:", data);
            toast.success("Password Added Successfully")
            reset();
            router.refresh()
        } catch(error){
            console.error(error)
            toast.error("Failed to Add Password")
        }
    };

    return(
        <Card>
            <CardHeader>
                <CardTitle>Add New Password</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" type="text" placeholder="example.com" {...register("website")} />

                        {errors.website && (
                            <p className="text-sm text-destructive">
                                {errors.website.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="username">UserName</Label>
                        <Input id="username" type="text" placeholder="johndoe" {...register("username")} />

                        {errors.username && (
                            <p className="text-sm text-destructive">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="****" {...register("password")} />

                        {errors.password && (
                            <p className="text-sm text-destructive">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        Add Password
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}