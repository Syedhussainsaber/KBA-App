import React from 'react'

const Whitepaper = () => {
  return (
    <div className="m-2 p-2 mt-24" id="tokenomics">
      <h3 className="text-serif text-5xl text-white font-semibold font-serif mb-12 md:mb-6">
        Whitepaper
      </h3>

      <div className="flex flex-col lg:flex-row jusfity-evenly mt-16">
        <div className="basis-1/2 flex p-2 m-2">
          <img
            src="/whitepaper.png"
            className="aspect-auto w-3/4 md:w-1/2 animate-bounce-slow p-2 m-2 justify-center ml-16"
            alt=""
          />
        </div>
        <div className="basis-1/2 text-white text-2xl leading-relaxed p-2 m-2">
          <p className="text-left">
            {' '}
            KBA Coin Has Been Designed In Such A Way To Become The Most Useful
            Defi Token. The Token Burn Concept Will Keep Burning Tokens From
            Supply Consistently. Whenever Anyone Transfer KBA Tokens, Either Buy
            / Sell / Swap / Transfer, 2% Of Tokens Will Burn. Thus, The Tokens
            Supply Will Get Lower And Lower Day By Day. It Will Work As An
            Engine To Push The Price And Become An Asset For Holders.
          </p>
          <button className="rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 px-4 text-2xl font-serif cursor-pointer m-4 mt-8 ">
            Read Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Whitepaper
