"use server";

import databaseConnect from './connect';
import userModel from './models/userModel';

import mongoose from 'mongoose';
import crypto from 'crypto'

function generateUniqueDataForUser()
{
    return {
        id: Date.now() + (Math.random * 10000000),
        token: crypto.randomUUID(),
        referral_code: (Math.random() + 1).toString(30).substring(2)
    }
}

async function createNewUserByDiscord(discord_user, ip_address) {
    const unique = generateUniqueDataForUser();

    // TODO: Create a unique solana wallet address
    // TODO: Download avatar from discord and save it on our discord

    try {
        const newUser = await userModel.create({
            username: discord_user.userData.username,
            email: discord_user.userData.email,
            id: unique.id,
            token: unique.token,
            discord_account: discord_user.userData,
            wallet_address: "none for now",
            ip_address: ip_address,
            referral_code: {
                referral_code_id: unique.referral_code,
            },
        });

        console.log("User created successfully:", newUser);
        return newUser;
    } catch (error) {
        console.error("Error creating new user:", error.message);

        if (error.code === 11000) 
            throw new Error("A user with this email already exists.");

        throw new Error("Failed to create new user. Please try again.");
    }
}


export default createNewUserByDiscord