import Footer from './Footer';

function Home()
{
    return (
        <div className="h-full">
            <div className="flex justify-center items-center bg-gradient-to-b from-zinc-900 to-zinc-600/10 text-gray-200 h-full">
                <div>
                    <div className="w-full mx-auto px-6 py-20 text-center flex flex-col items-center space-y-6">
                        <div className="text-4xl md:text-6xl -mb-2 font-extrabold leading-relaxed">
                            The <span className="text-yellow-400">Solana Casino</span> Revolution!
                        </div>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
                            The premier <b>Solana-powered casino</b>. Experience lightning-fast gaming, secure transactions, and unparalleled rewards. Bet, win, and withdraw with ease!
                        </p>
                
                        {/* Call-to-Actions */}
                        <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
                            Begin Playing
                        </button>
                        <button className="px-6 py-3 bg-zinc-700 text-white font-semibold rounded-md hover:bg-zinc-600 transition">
                            Deposit Solana
                        </button>
                        </div>
                    </div>
                    <div className="w-full mx-auto max-w-7xl px-6 py-20 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-yellow-400">Provably Fair Games</h3>
                            <p className="text-gray-500 dark:text-gray-400">All games are fully random with a provably fair system, ensuring transparent and trustworthy results.</p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-yellow-400">Fully Faceless and Anonymous</h3>
                            <p className="text-gray-500 dark:text-gray-400">Wynnsy offers a completely faceless experience, allowing you to play and transact anonymously, with no need for personal information.</p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-yellow-400">Fast Transactions with Solana</h3>
                            <p className="text-gray-500 dark:text-gray-400">Powered by the Solana network, Wynnsy offers lightning-fast deposits and withdrawals with minimal fees.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;