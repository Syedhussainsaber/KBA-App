import React from 'react'
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { BsFillBackspaceFill } from 'react-icons/bs'
import { useState } from 'react'
const Navbar = () => {
  const [menudisplay, setMenudisplay] = useState(false)
  const menuCondition = () => {
    if (menudisplay) {
      setMenudisplay(false)
    } else {
      setMenudisplay(true)
    }
  }
  return (
    <div className="overflow-hidden">
      <header>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 pt-8 mb-[-4rem] lg:hidden">
          <img
            src="/logo.png"
            alt="KBA Coin"
            className="col-span-2 row-span-2 aspect-auto w-[110px] ml-4 p-2 md:w-1/4"
          />

          <div className="nav-icons col-span-1 row-span-1 col-end-5 items-around my-6 mx-4  lg:m-0">
            <FiMenu
              onClick={menuCondition}
              className={'text-white text-4xl justify-self-end cursor-pointer md:text-6xl '.concat(
                menudisplay ? 'hidden' : 'inline-block',
              )}
            />

            <BsFillBackspaceFill
              onClick={menuCondition}
              className={'text-white cursor-pointer text-4xl md:text-6xl '.concat(
                menudisplay ? 'inline-block' : 'hidden',
              )}
            />
          </div>
        </div>
        <nav
          className={'bg-slate-200 border-solid p-10 rounded-lg w-90 mx-auto my-16 sm:my-4 lg:bg-slate-200 lg:p-2 lg:border-none lg:ml-[-2em] lg:fixed lg:top-[-0.99em] lg:w-full z-10 lg:rounded-none lg:flex '.concat(
            menudisplay ? 'flex justify-center' : 'hidden',
          )}
        >
          <ul className="text-black flex flex-col text-2xl font-semibold lg:flex-row lg:w-full lg:justify-evenly lg:p-2 lg:text-3xl lg:mr-20 lg:items-baseline">
            <li>
              <img
                src="/logo.png"
                className={
                  'w-[70px] hidden cursor-pointer md-[100px] lg:aspect-square lg:w-24 lg:mr-10 lg:inline'
                }
                alt="KBA COIN"
              />
            </li>
            <li className="m-4 cursor-pointer nav-item lg:p-2 lg:m-0">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-550}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="m-4 cursor-pointer nav-item lg:p-2 lg:m-0">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="m-4 cursor-pointer nav-item lg:p-2 lg:m-0">
              <Link
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Roadmap
              </Link>
            </li>
            <li className="m-4 cursor-pointer nav-item lg:p-2 lg:m-0">
              <Link
                to="tokenomics"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                {' '}
                Tokenomics{' '}
              </Link>
            </li>
            <li className="m-4 cursor-pointer nav-item lg:p-2 lg:m-0">
              <Link>Services</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
