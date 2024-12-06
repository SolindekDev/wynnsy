"use client";

import Footer from "./Footer.jsx";

const UseCode = () => {
    return (
        <div className="h-full">
            <div className="p-16 h-full">
                <div className="rounded-lg w-2/3 min-h-[35vh] border-4 border-neutral-800
                                bg-gradient-to-bl from-zinc-900 to-yellow-400/25 text-gray-200
                                p-8 px-10 hover:-translate-y-1.5 transition-all duration-200">
                    <div className="text-gray-200 font-bold text-4xl mb-3">Unlock Your Extra 5% — Redeem Your Code!</div>
                    <div className="text-gray-400 text-lg">Ready to boost your balance? Enter any promo code you&apos;ve received and instantly get 5% more on your top-up. Don&apos;t have a promo code? No problem! Just use <b className="text-yellow-400">WYNNSY</b> and enjoy the bonus. The more codes you redeem, the more you play — and the more you win!</div>
                </div>
            </div>    
            <Footer/>
        </div>
    );
};
  
export default UseCode