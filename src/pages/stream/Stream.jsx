import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../home/home-carousel/carousel";

export const Stream = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-40 sm:px-12">
      <h1 className="text-left text-black text-2xl px-5 sm:px-0 sm:text-4xl">
        Stream Collections
      </h1>
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row px-5 sm:px-0 w-full sm:justify-between">
        <div className="flex flex-row w-full gap-8 text-black">
          <button className="hover:text-themeRed font-bold text-xl focus:text-themeRed active:text-themeRed">
            <Link to="/stream">Video</Link>
          </button>
          <button className="hover:text-themeRed font-bold text-xl focus:text-themeRed active:text-themeRed">
            <Link to="/stream">Audio</Link>
          </button>
        </div>
        <div className="flex flex-row w-full justify-end gap-8">
          <div className="w-1/2 sm:w-1/4">
            <div className="flex justify-end w-full">
              <div className="w-full">
                <div className="dropdown relative w-full">
                  <button
                    className="
                    w-full
          dropdown-toggle
          px-6
          py-2.5
          bg-gray-100
          text-gray-700
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-100 hover:shadow-lg
          focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-100 active:shadow-lg active:text-gray-700
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genre
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        Latin
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        Techno
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        Double Step
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <div className="flex justify-end w-full">
              <div className="w-full">
                <div className="dropdown relative w-full">
                  <button
                    className="
                    w-full
          dropdown-toggle
          px-6
          py-2.5
          bg-gray-100
          text-gray-700
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-100 hover:shadow-lg
          focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-100 active:shadow-lg active:text-gray-700
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Status
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-gray-100
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        Available to mint
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="/stream"
                      >
                        Sold out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-6 pb-8 w-full">
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
          {[1, 2, 3].map((i) => {
            return <Card />;
          })}
        </div>
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
          {[1, 2, 3].map((i) => {
            return <Card />;
          })}
        </div>
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
          {[1, 2, 3].map((i) => {
            return <Card />;
          })}
        </div>
      </section>
    </div>
  );
};
