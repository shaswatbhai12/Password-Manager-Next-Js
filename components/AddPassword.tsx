"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddPassword(){
    const [website, setWebsite] = useState("")
    const [username, setUsername ] = useState("")
    const [password, setPassword ] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("Password Added", {
            website,
            username, 
            password,
        });

        setWebsite("")
        setUsername("")
        setPassword("")
    };

    return(
        <Card>
            <CardHeader>
                <CardTitle>Add New Password</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" type="text" placeholder="example.com" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="username">UserName</Label>
                        <Input id="username" type="text" placeholder="johndoe" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="****" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}