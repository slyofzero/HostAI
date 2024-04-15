"use client";
import { useGlobalStates } from "@/state";
import Image from "next/image";

export function DeployInstanceButton() {
  const { setShowInstances, showInstances } = useGlobalStates();

  function onClick() {
    setShowInstances((prev) => !prev);
  }

  return (
    <button
      onClick={onClick}
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)] !bg-default max-w-fit bg-opacity-90 mt-4"
    >
      {showInstances ? "Deploy Instance" : "Cancel Instance"}
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
    </button>
  );
}

export function DeployInstance() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto p-4">
      <h1 className="pl-10 py-5 text-left w-full text-4xl font-bold">
        Deploy New Instance
      </h1>
      <div className="w-full mt-14">
        <h2 className="text-2xl">Choose Type</h2>
        <div className="flex flex-row gap-x-4 gap-y-2 pt-6 flex-wrap lg:flex-nowrap lg:gap-y-0">
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out bg-neutral-500 bg-opacity-50">
            <span className="triangle">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="absolute text-sm mt-[0.1rem] mr-[0.1rem] top-0 right-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            </span>
            <p className="font-bold text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-2xl mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"></path>
                <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"></path>
                <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"></path>
              </svg>
              Cloud Compute
            </p>
            <p className="text-sm mt-3 text-zinc-400">
              Virtual machines for more demanding business apps, e.g. production
              websites, CI/CD, video transcoding, or larger databases.
            </p>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <p className="font-bold text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-2xl mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
              </svg>
              Dedicated Server
            </p>
            <p className="text-sm mt-3 text-zinc-400">
              Single tenant bare metal for apps with the most demanding
              performance or security requirements.
            </p>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <p className="font-bold text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                className="text-2xl mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z"></path>
              </svg>
              Virtual Gaming
            </p>
            <p className="text-sm mt-3 text-zinc-400">
              Virtual machines for more demanding business apps, e.g. production
              websites, CI/CD, video transcoding, or larger databases.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <h2 className="text-2xl">Choose Location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 513 342"
                className="max-w-[25px] rounded mr-4"
              >
                <path fill="#FFF" d="M0 0h513v342H0z"></path>
                <path
                  d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z"
                  fill="#D80027"
                ></path>
                <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                <path
                  d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"
                  fill="#FFF"
                ></path>
              </svg>
              <p className="font-bold text-sm">United States</p>
            </div>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 513 342"
                className="max-w-[25px] rounded mr-4"
              >
                <g fill="#FFF">
                  <path d="M0 0h513v341.3H0V0z"></path>
                  <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"></path>
                </g>
                <path
                  d="M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z"
                  fill="#0052B4"
                ></path>
                <g fill="#D80027">
                  <path d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"></path>
                  <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"></path>
                </g>
              </svg>
              <p className="font-bold text-sm">United Kingdom</p>
            </div>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 513 342"
                className="max-w-[25px] rounded mr-4"
              >
                <path fill="#FFF" d="M0 0h513v342H0z"></path>
                <path fill="#0052B4" d="M0 0h171v342H0z"></path>
                <path fill="#D80027" d="M342 0h171v342H342z"></path>
              </svg>
              <p className="font-bold text-sm">France</p>
            </div>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 85.333 512 341.333"
                className="max-w-[25px] rounded mr-4"
              >
                <path fill="#FFF" d="M0 85.337h512v341.326H0z"></path>
                <path fill="#D80027" d="M0 85.337h512V256H0z"></path>
                <g fill="#FFF">
                  <path d="M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"></path>
                  <path d="m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"></path>
                </g>
              </svg>
              <p className="font-bold text-sm">Singapore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <h2 className="text-2xl">Choose Operation System</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <Image
                height={200}
                width={200}
                src="./ubuntu.svg"
                alt=""
                className="max-w-[25px] mr-4"
              />
              <p className="font-bold text-sm">Linux (Ubuntu)</p>
            </div>
          </div>
          <div className="w-full relative rounded border border-neutral-800 p-4 cursor-pointer transition-colors duration-500 ease-in-out">
            <div className="flex flex-row items-center">
              <Image
                height={200}
                width={200}
                src="./windows.svg"
                alt=""
                className="max-w-[25px] mr-4"
              />
              <p className="font-bold text-sm">Windows 11</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <h2 className="text-2xl">Chose Plan</h2>
        <div className="w-full rounded border border-neutral-800 mt-6">
          <div className="flex flex-row items-center p-2 border-b border-neutral-800">
            <p className="w-full text-sm text-zinc-400">Name</p>
            <p className="w-full text-sm text-zinc-400">Cores</p>
            <p className="w-full text-sm text-zinc-400">Memory</p>
            <p className="w-full text-sm text-zinc-400">Storage</p>
            <p className="w-full text-sm text-zinc-400">Bandwidth</p>
            <p className="w-full text-sm text-zinc-400">Price</p>
          </div>
          <div className="flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer">
            <p className="w-full text-sm font-bold">Competitor</p>
            <p className="w-full text-sm">8-core 3.1GHz</p>
            <p className="w-full text-sm">12GB</p>
            <p className="w-full text-sm">512GB SSD</p>
            <p className="w-full text-sm">1GB</p>
            <p className="w-full text-sm">
              <span className="font-bold">$40/month </span> <br />
              $0.055/hour
            </p>
          </div>
          <div className="flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer">
            <p className="w-full text-sm font-bold">Premium</p>
            <p className="w-full text-sm">8-core 3.7GHz</p>
            <p className="w-full text-sm">28GB</p>
            <p className="w-full text-sm">512GB SSD</p>
            <p className="w-full text-sm">1GB</p>
            <p className="w-full text-sm">
              <span className="font-bold">$65/month </span> <br />
              $0.089/hour
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center mt-12 px-4">
        <button
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-unit-20 h-unit-10 text-small gap-unit-2 [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover max-w-fit px-8 rounded"
          type="button"
        >
          Deploy
        </button>
      </div>
    </div>
  );
}
