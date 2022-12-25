import React from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { IoTime } from 'react-icons/io5'

const Roadmap = (props) => {
  return (
    <>
      <div
        className={
          'roadmapContainer flex justify-center lg:relative ' + props.move
        }
      >
        <div
          className={
            'container p-6 rounded-r-md rounded-b-md mb-10 lg:mb-6 lg:w-1/4 lg:p-4 cursor-pointer ' +
            props.bgColor +
            ' ' +
            props.grid +
            ' ' +
            props.hover
          }
        >
          <div className="box bg-yellow-300 p-4 lg:w-full ">
            <div className="flex flex-col justify-center items-center m-4">
              <h4 className="text-4xl font-serif font-semibold m-2">
                Quarter {props.period}
              </h4>

              {props.icon ? (
                <BsFillCheckSquareFill className="text-3xl m-2" />
              ) : (
                <IoTime className="text-4xl m-2" />
              )}

              <div className="matter m-2 flex flex-col justify-evenly items-center">
                <p>Global KBA Network Live</p>
                <p>Listing On CoinMarketCap </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap
