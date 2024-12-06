import discordConfig from "../../../../discord_config.js"

async function getDiscordUserDataByAuthCode(code)
{    
    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: discordConfig.client_id,
            client_secret: discordConfig.client_secret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: discordConfig.redirect_uri,
        }),
    });

    const data = await response.json();
    if (!response.ok)
        throw new Error(JSON.stringify(data));

    const userResponse = await fetch('https://discord.com/api/v10/users/@me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${data.access_token}`,
        },
    });

    const userData = await userResponse.json();
    if (!userResponse.ok)
        throw new Error(JSON.stringify(userData));
    
    return { userData: userData, clearData: data };
}

async function inviteUserToServer(user, server_id)
{
    console.log(`https://discord.com/api/v10/guilds/1291358214453071882/members/${user.userData.id}`)
    const inviteResponse = await fetch(`https://discord.com/api/v10/guilds/1291358214453071882/members/${user.userData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${discordConfig.bot_token}`,  // This requires a bot token with appropriate permissions
        },
        body: JSON.stringify({
            access_token: user.clearData.access_token, // The user's access token to authenticate the request
        }),
    });

    if (!inviteResponse.ok) 
    {
        const inviteDataError = await inviteResponse.json();
        throw new Error(JSON.stringify(inviteDataError))
    }

    return;
}

export default { 
    getDiscordUserDataByAuthCode,
    inviteUserToServer
}