"use client";

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center h-[80vh] text-center">
            <div>
                <div className="font-black text-8xl text-yellow-400 mb-6">404</div>
                <div className="font-bold text-4xl text-gray-200 mb-2">Bet You Didn&apos;t Expect That!</div>
                <div className="text-lg text-gray-400 max-w-3xl">Looks like you&apos;ve hit a losing streak and landed on a page that doesn&apos;t exist. Don&apos;t worry, we&apos;ve got plenty of other winning options — try another route!</div>
            </div>
        </div>
    );
};
  
  export default PageNotFound