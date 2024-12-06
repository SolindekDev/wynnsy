"use client";

import Leaderboard from '../components/Leaderboard.jsx';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';
import Loading from '../components/Loading.jsx';
import GetAuthentication from '../Authentication.jsx';

import Cookies from 'js-cookie';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const App = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const auth = GetAuthentication();
        setTimeout(() => {
            if (auth == null)
                return {}
            else
                setAuth(auth);
        }, 200);
    }, []);

    const searchParams = useSearchParams()

    var success = searchParams.get('success')
    var error_m = ""

    if (success == 'false')
        error_m = searchParams.get('error')

    if (auth == null)
        return <Loading/>;
    return (
        <>
            <div className="grid grid-cols-10 grid-rows-10 w-full max-h-[100vh]">
                {/* Navbar */}
                <div className="col-span-10 border-zinc-800 border-b-2">
                    <Navbar auth={auth}/>
                </div>
                
                {/* Sidebar - fixed height, no scroll */}
                <div className="col-span-2 row-span-10 row-start-2 border-zinc-800 border-r-2 overflow-hidden">
                    <Sidebar auth={auth}/>
                </div>

                {/* Content Area - enable scroll here */}
                <div className="col-span-8 row-span-9 col-start-3 row-start-2 overflow-y-auto max-h-[calc(100vh-4rem)] scrollable-content">
                    <div>
                        <div className="text-gray-300 mb-[40vh] px-[7.5vw] py-24 pb-20 w-full">
                        {success == "true" && (
                            <>
                                <h1 className="text-5xl font-bold mb-4 text-yellow-400">Welcome to Wynnsy</h1>
                                <p className="text-lg mb-6">
                                You've successfully signed up and are now ready to roll the dice! Don&apos;t forget to claim your bonus and explore all the exciting games we offer.
                                </p>
                                <div className="flex justify-between pt-4 pr-10">
                                    <div></div>
                                    <div className='flex space-x-4'>
                                        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
                                            Begin Playing
                                        </button>
                                        <button className="px-6 py-3 bg-zinc-700 text-white font-semibold rounded-md hover:bg-zinc-600 transition">
                                            Deposit Solana
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        {success != "true" && (
                            <>
                                <h1 className="text-5xl font-bold mb-4 text-yellow-400">Oops! Something went wrong.</h1>
                                <p className="text-lg mb-6">
                                There was an issue with your sign-up process. Please try again or contact support if the problem persists.
                                </p>
                                <p className="text-lg mb-6 text-red-300">
                                <code>{ error_m }</code>
                                </p>
                                <div className="flex justify-between pt-4 pr-10">
                                    <div></div>
                                    <div className='flex space-x-4'>
                                        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
                                            Try again
                                        </button>
                                        <button className="px-6 py-3 bg-zinc-700 text-white font-semibold rounded-md hover:bg-zinc-600 transition">
                                            Contact support
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
