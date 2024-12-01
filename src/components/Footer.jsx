function Footer()
{
    return (
    <footer className="p-16 bg-zinc-950/20">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0 max-w-lg">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="/res/wynnsy_logo.png" className="mr-3 h-5" alt="FlowBite Logo" />
                    </a>
                    <p className="my-6 mb-4 dark:text-gray-400"><b>Play Fair, Win Big</b> — Experience the Future of Solana Casino.</p>
                    <p className="dark:text-gray-400 text-xs mb-2">wynnsy.xyz is owned and operated by <b>Wynnsy Games Ltd</b> located at <b>Athalassas Ave 140, Strovolos 2024, Cyprus</b>.</p>
                    <p className="dark:text-gray-400 text-xs mb-2"> For any inquiries or business matters, please contact us at <a href="mailto:contact@wynnsy.xyz" className="font-bold">contact@wynnsy.xyz</a></p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 sm:grid-cols-4">
                    <div>
                        <h2 className="pb-3 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white border-b border-zinc-600/50">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/use-code" className="hover:underline">Referral Code</a>
                            </li>
                            <li className="mb-4">
                                <a href="/leaderboard" className="hover:underline">Leaderboard</a>
                            </li>
                            <li className="mb-4">
                                <a href="/faq" className="hover:underline">FAQs</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="pb-3 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white border-b border-zinc-600/50">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="/provably-fair" className="hover:underline">Provably Fair</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="pb-3 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white border-b border-zinc-600/50">COMMUNITY</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/games/roullete" className="hover:underline">Discord server</a>
                            </li>
                            <li className="mb-4">
                                <a href="/games/roullete" className="hover:underline">Telegram group</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="pb-3 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white border-b border-zinc-600/50">GAMES</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/games/roullete" className="hover:underline">Roulette</a>
                            </li>
                            <li className="mb-4">
                                <a href="/games/dice" className="hover:underline">Dice Game</a>
                            </li>
                            <li className="mb-4">
                                <a href="/games/coin-flip" className="hover:underline">Coin Flip</a>
                            </li>
                            <li className="mb-4">
                                <a href="/games/fortune-wheel" className="hover:underline">Wheel of Fortune</a>
                            </li>
                            <li className="mb-4">
                                <a href="/games/bomb-slot" className="hover:underline">The Bomb Slot</a>
                            </li>
                            <li>
                                <a href="/games/crash" className="hover:underline">Crash</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto border-zinc-600/50 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="/" className="hover:underline">Wynnsy</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Footer