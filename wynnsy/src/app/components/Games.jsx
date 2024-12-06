"use client";

import Footer from "./Footer.jsx";
/*roulette, dice game, coin flip, wheel of fortune, the bomb slot, crash*/
const Games = () => {
    return (
        <div className="h-full">
            <div className="grid grid-cols-3 grid-rows-2 gap-12 p-24 py-24 pt-32">
                <div className="p-9 rounded-2xl transition-all duration-200 cursor-pointer hover:-translate-y-2 border-4 border-neutral-800
                                bg-gradient-to-b from-yellow-300/20 to-yellow-400/50 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        Roulette
                    </div>
                    <div className="text-gray-300/80">
                        Bet on numbers or colors and spin the wheel, classic casino fun!
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-gradient-to-b transition-all duration-200 cursor-pointer hover:-translate-y-2 from-sky-400 to-sky-700 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        Dice Game
                    </div>
                    <div className="text-gray-300/80">
                        Roll the dice, guess the outcome, and win big fast!
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-gradient-to-b transition-all duration-200 cursor-pointer hover:-translate-y-2 from-red-400 to-red-700 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        Coin Flip
                    </div>
                    <div className="text-gray-300/80">
                        Heads or tails? Double your wager instantly.
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-gradient-to-b transition-all duration-200 cursor-pointer hover:-translate-y-2 from-emerald-400 to-emerald-700 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        Wheel of Fortune
                    </div>
                    <div className="text-gray-300/80">
                        Spin the wheel and chase masive multipliers.
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-gradient-to-b transition-all duration-200 cursor-pointer hover:-translate-y-2 from-fuchsia-400 to-fuchsia-700 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        The Bomb Slot
                    </div>
                    <div className="text-gray-300/80">
                        Pick tiles, avoid bombs, and uncover rewards
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-gradient-to-b transition-all duration-200 cursor-pointer hover:-translate-y-2 from-amber-400 to-amber-700 text-center mb-7">
                    <div className="text-2xl tracking-wide font-bold text-gray-200 pb-2">
                        Crash
                    </div>
                    <div className="text-gray-300/80">
                        Cash out before the multiplier crashes, risk or reward!
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};
  
export default Games