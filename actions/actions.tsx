"use server"

import { clerkClient, auth } from "@clerk/nextjs/server"

interface Card {
    cardNo: string,
    expiry: string,
    cvv: number
}

export async function addCardServer(
    cardNo: string,
    expiry: string,
    cvv: number
){
    const { userId } = await auth()
    if(!userId){
        throw new Error("You must have Signed in")
    }
}