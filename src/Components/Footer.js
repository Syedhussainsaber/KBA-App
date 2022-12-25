import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const Footer = () => {
  return (
    <>
      <div className="footer text-slate-100 text-center bg-black p-8 w-screen">
        <p className="w-screen inline-block">
          Copyright{' '}
          <AiOutlineCopyrightCircle className="text-white text-center inline-block" />{' '}
          Reserved For KBAcoin.com
        </p>
      </div>
    </>
  )
}

export default Footer
