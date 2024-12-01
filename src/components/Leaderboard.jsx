import Footer from "./Footer.jsx";

const Leaderboard = () => {
    const players = [
        { rank: 1, name: 'FellyCatX12', avatar: 'https://cdn.discordapp.com/guilds/1001932167166824490/users/651255946885988355/avatars/8acf417d0af4191d79e0c35c91c01a22.png?size=128', level: 356 },
        { rank: 2, name: '8nix_', avatar: 'https://cdn.discordapp.com/avatars/191352027534589952/30f7f2fa5bea5524199c8a2a406bbc46.png?size=128', level: 334 },
        { rank: 3, name: 'marx20', avatar: 'https://cdn.discordapp.com/avatars/236768994411937792/472a271397006e577ce5d32174ba1d9a.png?size=128', level: 248 },
    ];

    return (
        <div className="h-full">
            <div className="py-16 px-24 h-full">
                <h1 className="text-4xl font-bold text-gray-300 mb-8">Meet Our Top Champions!</h1>
                <div className="flex justify-center items-center h-[70vh] space-x-8">
                    <div className="flex flex-col items-center">
                        <img className="size-32 rounded-full" src={players[0].avatar}/>
                        <img src="/res/podium2.png" className="h-48 mb-5"/>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-yellow-400 mb-1">{players[0].name}</div>
                            <div className="text-base text-gray-400">Level {players[0].level}</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-20">
                        <img className="size-32 rounded-full" src={players[1].avatar}/>
                        <img src="/res/podium1.png" className="h-48 mb-7"/>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-yellow-400 mb-1">{players[1].name}</div>
                            <div className="text-base text-gray-400">Level {players[1].level}</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="size-32 rounded-full" src={players[2].avatar}/>
                        <img src="/res/podium3.png" className="h-48 mb-5"/>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-yellow-400 mb-1">{players[2].name}</div>
                            <div className="text-base text-gray-400">Level {players[2].level}</div>
                        </div>
                    </div>
                </div>
            </div>    
            <Footer/>
        </div>
    );
};
  
export default Leaderboard