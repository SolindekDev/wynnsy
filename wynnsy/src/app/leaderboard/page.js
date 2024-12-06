"use client";

import Leaderboard from '../components/Leaderboard.jsx';
import Modal from '../components/Modal.jsx';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Loading from '../components/Loading.jsx';
import GetAuthentication from '../Authentication.jsx';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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
                    <Leaderboard auth={auth}/>
                </div>
            </div>
        </>
    )
}

export default App
