import React from 'react'

const About = () => {
  return (
    <div id="about">
      <div className="text-center font-semibold p-2 m-2 mb-4">
        <h3 className="font-serif text-4xl text-white mb-6">About KBA Coin</h3>
      </div>
      <div className="flex flex-col m-2 p-2 justify-center lg:flex-row">
        <div className="basis-1/2 m-1 p-1 ml-[-1em] lg:ml-2">
          <img
            src="/about.png"
            className="aspect-auto p-2 animate-bounce-slow w-full m-2 mt-6 lg:pl-4 pt-4 md:w-3/4"
            alt="About Us"
          />
        </div>
        <div className="basis-1/2  text-white p-2 flex flex-col justify-center w-100 m-2">
          <h4 className="text-center text-cyan-300 font-lg leading-10 text-3xl font-semibold font-serif mb-4">
            Decentralised Anti-Inflation Token
          </h4>
          <p className="text-white p-2 leading-relaxed text-left pr-3 text-2xl">
            KBA token is coming up with the newest and latest technology on the
            most trusted blockchain BSC (Binance Smart Chain). KBA Token has
            been designed in such way to become the most useful defi token. The
            token burn concept will keep burning tokens from supply
            consistently.
            <br /> <br />
            Whenever anyone transfer KBA Tokens, either (buy 2%) / (Sell tax 3%)
            / swap or transfer 0% of tokens will burn. Thus, the tokens supply
            will get lower and lower day by day. It will work as an engine to
            push the price and become an asset for holders.
            <br />
            <br />
            On every transaction (Buy 2%/Sell 9%/Swap/Transfer) there is 2% fee.
            This fee will be deducted and distributed in 2 different wallets.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
