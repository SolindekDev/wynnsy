"use client";

import Footer from "./Footer.jsx";

const ProvablyFair = () => {
    return (
    <div>
      <div className="text-gray-300 min-h-screen px-[7.5vw] py-24 pb-20 w-full">
        <h1 className="text-5xl font-bold mb-4 text-yellow-400">Provably Fair System</h1>
        <p className="text-lg mb-6">
          At <b>Wynnsy</b>, we are committed to providing a transparent and fair gaming experience for all our players. We understand that trust is the cornerstone of any great casino, and that&apos;s why we have implemented a provably fair system that guarantees every game outcome is not only completely random but also verifiable by you, the player.
        </p>
        <p className="text-lg mb-6">
          We use cutting-edge cryptographic algorithms that ensure every bet, every roll, and every spin is determined in a way that is beyond manipulation. No one, not even us, can influence the results once a game begins. This system allows you to verify the fairness of each outcome, giving you full control and confidence in the integrity of the games you play.
        </p>
        <p className="text-lg mb-6">
        Your experience at Wynnsy should be about more than just playing – it should be about playing with confidence. We believe that when you know the odds are truly random, the fun and excitement of the game only grow. Our transparent approach puts the power back in your hands, and our system is specifically designed to ensure fairness, offering you a level of transparency that few casinos can match.
        </p>
  
        <div className="mx-auto">
          {/* Section: What is Provably Fair */}
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">What is Provably Fair?</h2>
            <p className="text-lg">
            A provably fair system is a transparent approach that guarantees every game result is generated randomly and is beyond manipulation by the casino. By utilizing advanced cryptographic methods, this system allows players to independently verify the fairness of each outcome, ensuring a secure and trustworthy gaming experience.
            </p>
          </section>
  
          {/* Section: How Does It Work? */}
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">How Does It Work?</h2>
            <ol className="list-decimal ml-6">
              <li className="mb-6 text-lg">
                <strong>Server Seed:</strong> Before the game begins, the server generates a random number, which is then hashed to create the server seed. This seed is shared with the player in the form of a hash, ensuring transparency right from the start. The hash allows the player to confirm the randomness of the server&apos;s seed, offering an initial layer of trust in the system.
              </li>
              <li className="mb-6 text-lg">
                <strong>Client Seed:</strong> The player, in turn, generates their own random number, known as the client seed. This client seed adds another unique layer of randomness to the process, making it impossible for either the player or the casino to control or predict the outcome. The combination of both the server seed and client seed ensures that the game&apos;s result is determined by independent sources, guaranteeing fairness and unpredictability.
              </li>
              <li className="mb-6 text-lg">
                <strong>Game Result:</strong> Once both seeds are provided, the server combines them to calculate the game result. This two-step process ensures that neither the player nor the casino can manipulate the outcome once the game has started. The server seed, the player’s input, and the combination of both form the final result, which is completely random and verifiable.
              </li>
              <li className="text-lg">
                <strong>Verification:</strong> After the game concludes, players can use the server’s hash (which was shared with them at the beginning) to independently verify that the result was not tampered with. By using external tools or scripts, players can confirm the integrity of the game and ensure that the outcome was determined fairly. This process guarantees that the casino cannot alter or influence the result in any way, providing full transparency and trust for the player.
              </li>
            </ol>
          </section>
  
          {/* Section: Why It Matters */}
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">Why It Matters</h2>
            <p className="mb-4 text-lg">
            Traditional online casinos rely on players blindly trusting the platform’s fairness, with little to no insight into how game outcomes are determined. This lack of transparency often leaves players feeling uncertain about the integrity of the games. At Wynnsy, we completely eliminate this blind trust by giving you full control and transparency, allowing you to independently verify the fairness of every game you play. Our provably fair system is built with the highest standards of trust and security in mind, ensuring that you can confidently engage with our platform.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li className="mb-6 text-lg"><b>Full transparency</b> — Every aspect of our gaming process is open and accessible for verification. From the moment you place your bet to the final result, you can track and audit the entire process, ensuring that everything is as it should be. We don’t hide behind complicated algorithms or secret mechanisms — everything is clear and verifiable.</li>
              <li className="mb-6 text-lg"><b>No hidden algorithms</b> — Unlike traditional casinos, which often operate with proprietary algorithms that cannot be examined, our system relies on open, cryptographic techniques that are fully transparent. Our games are not driven by mysterious, hidden logic; instead, they are based on randomly generated seeds that you can verify at any time. This eliminates the possibility of manipulation and ensures that the outcomes are entirely fair.</li>
              <li className="mb-6 text-lg"><b>Complete player control over seed generation</b> — At Wynnsy, you’re not just a passive participant. You have control over key aspects of the fairness system, including the generation of your own unique client seed, which contributes to the randomness of each game. This two-seed system, combining both the server’s and the player’s input, ensures that the result is entirely random and free from manipulation, providing a level of fairness that is truly player-driven.</li>
            </ul>
            <p className="mb-4 text-lg">
            By offering these guarantees, we ensure that you can trust our platform not just with your bets, but with your experience as a whole. At Wynnsy, fairness isn’t a promise — it’s a fundamental part of the game itself.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
  
export default ProvablyFair