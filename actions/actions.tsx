"use server"

import { clerkClient, auth } from "@clerk/nextjs/server"

interface Card {
    cardNo: string,
    expiry: string,
    cvv: number
}

interface Password {
    website: string,
    username: string,
    password: string
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

export async function addPasswordServer(website: string, username: string, password: string) {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("You must be Signed In")
    }

    const client = await clerkClient()

    const user = await client.users.getUser(userId)

    const existingPasswords = (user.privateMetadata.passwords as Password[] | undefined) ?? [];

    const newPassword : Password = {
        website,
        username,
        password,
    }

    await client.users.updateUserMetadata(userId, {
        privateMetadata: {
            ...user.privateMetadata,
            passwords: [...existingPasswords, newPassword],
        },
    });

    return {
        success: true,
    };
}