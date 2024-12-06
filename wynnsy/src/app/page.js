"use client";

import Home from './components/Home.jsx';
import Modal from './components/Modal.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Loading from './components/Loading.jsx';
import GetAuthentication from './Authentication.jsx';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const App = () => {
    const modalOpen = Cookies.get("age-restriction") !== "true";
    console.log("Should we open age restriction modal: ", modalOpen)
    const [isModalOpen, setModalOpen] = useState(modalOpen);
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

    const handleModalClose = () => {
        // Set expire date to 30 days
        Cookies.set("age-restriction", "true", { expires: 30 });
        setModalOpen(false);
    };

    if (auth == null)
        return <Loading/>;

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={ () => setModalOpen(false) }>
                <div className="flex justify-center items-center h-[40vh] text-center">
                    <div>
                        <div className="font-black text-9xl text-red-500 mb-6">18+</div>
                        <div className="font-bold text-3xl text-gray-200 mb-2">Age Restriction...</div>
                        <div className="text-gray-400 max-w-3xl">This platform is strictly for players aged 18 and above. By proceeding, you confirm that you meet the legal age requirement to participate in online gaming. Play responsibly and enjoy the experience!</div>
                        <div className="flex justify-center items-center pt-7 space-x-4">
                            <button onClick={ () => handleModalClose() } className="px-3 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition hover:-translate-y-1">
                                I&apos;m 18 or older
                            </button>
                            <button onClick={ () => window.location.href = "https://www.google.com" } className="px-3 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-500 transition hover:-translate-y-1">
                                I&apos;m under 18
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
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
                    <Home auth={auth}/>
                </div>
            </div>
        </>
    )
}

export default App
