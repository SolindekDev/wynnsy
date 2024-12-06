"use server";

import discordConfig from "../../../../discord_config.js"
import discordUser from './discord_user.js'
import databaseConnect from "@/database/connect.js";
import createNewUserByDiscord from "@/database/utils.js";

import { NextResponse } from "next/server.js";
import { cookies } from 'next/headers'

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'Unknown';
    
    /* Check for ?code */
    const code = searchParams.get('code');
    if (code == null)
        return new Response(JSON.stringify({ error: 'Code is null' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });

    databaseConnect();

    /* Request to discord to get info about the user */
    try {
        const user = await discordUser.getDiscordUserDataByAuthCode(code)

        try {
            await discordUser.inviteUserToServer(user, discordConfig.server_id)

            const finalUser = await createNewUserByDiscord(user, ip)
            const response = NextResponse.redirect(new URL('/after-registration?success=true&service=discord', request.url));

            const cookieStore = cookies()
            cookieStore.set('user_token', finalUser.token, {
                maxAge: 1209600 // 14 days
            })  
            return response;
        } 
        catch (e) {
            console.log(e)
            return Response.redirect(new URL(`/after-registration?success=false&service=discord&error=${e.toString()}`, request.url))
        }
    }
    catch (e) {
        return Response.redirect(new URL(`/after-registration?success=false&service=discord&error=${e.toString()}`, request.url))
    }
}
