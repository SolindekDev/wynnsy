
function Navbar()
{
    return (
        <nav className="px-[2vw] h-full flex justify-between items-center">
            <div className="flex justify-between items-center">
                <div className="pr-12">
                    <img src="/res/wynnsy_logo.png" className="h-6" /> 
                </div>
                <div className="hidden justify-between items-center lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-yellow-400 transition-all hover:-translate-y-[2.5px] duration-200 ease-in-out">Home</a>
                        </li>
                        <li>
                            <a href="/leaderboard" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-yellow-400 transition-all hover:-translate-y-[2.5px] duration-200 ease-in-out">Leaderboard</a>
                        </li>
                        <li>
                            <a href="/games" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-yellow-400 transition-all hover:-translate-y-[2.5px] duration-200 ease-in-out">Games</a>
                        </li>
                        <li>
                            <a href="/provably-fair" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-yellow-400 transition-all hover:-translate-y-[2.5px] duration-200 ease-in-out">Provably Fair</a>
                        </li>
                        <li>
                            <a href="/policy" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-yellow-400 transition-all hover:-translate-y-[2.5px] duration-200 ease-in-out">Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center h-full">
                <a href="/use-code" className="py-6 px-4 mr-6 hover:bg-zinc-800/35 cursor-pointer h-full">
                    <div className="text-yellow-400 text-center flex justify-center items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                        </svg>
                    </div>
                    <div className="uppercase text-gray-300 font-bold text-xs tracking-[0.125em] text-center">
                        USE CODE
                    </div>
                </a>
                <div className="py-2 px-4 mr-8 flex justify-center items-center">
                    <div className="mr-5">
                        <div className="text-yellow-400 mb-1 text-center text-xl font-bold flex justify-center items-center">
                            <p>0.00</p>
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" fill="rgb(250 204 21)" viewBox="0 0 398 312" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2" width="22" height="22">
                                <title>solana-sol-logo-svg</title>
                                <path d="m64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1zm0-234.1c2.5-2.4 5.8-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1zm268.5 116.3c-2.4-2.4-5.7-3.8-9.2-3.8h-317.4c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1z"/>
                            </svg>
                        </div>
                        <div className="uppercase text-gray-300 font-bold text-xs tracking-[0.125em] text-center">balance</div>
                    </div>
                    <div className="pl-5 border-zinc-800 border-l-2">
                        <button className="bg-yellow-400 py-2 px-4 rounded-lg font-extrabold tracking-tight text-gray-800 hover:bg-yellow-300">DEPOSIT</button>
                    </div>
                </div>
                <a href="/user/@me">
                    <img className="h-11 rounded-full" src="https://cdn.discordapp.com/avatars/848793859181117451/695bf8e3f049e569e9f70c8f3b9ad0be.png?size=256" />
                </a> 
                <div className="text-ellipsis pl-5">
                    <div className="text-yellow-400 uppercase font-bold text-lg">
                        <a href="/user/@me">
                            user-46p2lfWDTl                            
                        </a>
                    </div>
                    <div className="text-gray-400 font-semibold uppercase text-xs cursor-pointer hover:text-gray-300">LEVEL 1</div>
                </div>
            </div>
        </nav>
    )
}

{/* <nav classNameName="px-[4vw] py-6 bg-zinc-900">
                <div classNameName="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul classNameName="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" classNameName="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav> */}

export default Navbar;