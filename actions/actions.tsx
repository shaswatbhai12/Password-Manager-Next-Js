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

    const client = await clerkClient()

    const user = await client.users.getUser(userId);

    const existingCards = (user.privateMetadata.cards as Card [] | undefined) ?? [];

    const newCard: Card = {
        cardNo,
        expiry,
        cvv,
    };

    await client.users.updateUserMetadata(userId, {
        privateMetadata: {
            ...user.privateMetadata,
            cards: [...existingCards, newCard],
        },
    });

    return{
        success: true,
    };
}

export async function getCards() {
    const { userId } = await auth()

    if(!userId){
        throw new Error("You must be signed In")
    }

    const client = await clerkClient()

    const user = await client.users.getUser(userId);

    const cards = (user.privateMetadata.cards as Card[] | undefined) ?? [];

    return cards;
}