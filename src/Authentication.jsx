import Cookies from "js-cookie";

function GetAuthentication()
{
    const user_token = Cookies.get('user_token');

    // TODO: Get user info from API 
    // console.log(user_token)
    if (user_token == undefined)
        return null;
    else
        return { 
                    username: "user-46p2lfWDTl",  
                    avatarURL: "https://cdn.discordapp.com/avatars/848793859181117451/695bf8e3f049e569e9f70c8f3b9ad0be.png?size=256",
                    level_system: {
                        level: 3,
                        xp: 30,
                        required_xp: 100,
                    },
                    balance: 0.24039,
                    wallet_address: "kd02ms03,r5nxc0asnmj20dk2kls0mk"
                }
}

export default GetAuthentication