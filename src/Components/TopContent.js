import React from 'react'

const TopContent = (num) => {
  return (
    <div>
      <div className="topContainer flex flex-col justify-center items-center lg:flex-row m-2 mt-4 p-14 lg:mt-64">
        <div className="justify-self-center p-4 z-0" id="home">
          <img
            src="/home.png"
            className={
              'mt-2 mb-8 aspect-auto w-[200px] p-1 sm:w-90 md:p-2 animate-bounce-slow ease-in-out  justify-self-center md:w-11/12' +
              ' lg:hidden'
            }
            alt="Animation"
          />
        </div>
        <div className="basis-1/2 p-2">
          <h2 className="font-serif text-white text-5xl font-semibold leading-relaxed text-left">
            KBA Coins Secured and Easy to Use
          </h2>
          <p className="my-3 p-2 text-cyan-200 leading-relaxed text-xl font-mono text-left">
            KBA Tokens Are Decentralised Tokens, Created On Binance Smart Chain.
            These Tokens Are Unstoppable, Decentralised And Available For All.
          </p>
          <button className="rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 px-3 text-lg font-serif cursor-pointer m-3 ">
            Contract Address
          </button>
        </div>
        <div className="basis-1/2 flex flex-row justify-end">
          <img
            src="/home.png"
            className="hidden aspect-auto w-3/4 p-2 animate-bounce-slow ease-in-out lg:inline"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default TopContent
