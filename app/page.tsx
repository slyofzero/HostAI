import { useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center antialiased">
      <div className="h-[100vh] w-full relative flex flex-col items-center justify-center">
        <div className="z-10 relative flex flex-col items-center justify-center w-full">
          <p className="text-neutral-600 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <div className="flex space-x-1 my-6">
            <div className="overflow-hidden pb-2 w-fit">
              <div className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-medium whitespace-nowrap">
                <div>
                  <div className="inline-block">
                    <span className="text-white">R</span>
                    <span className="text-white">e</span>
                    <span className="text-white">n</span>
                    <span className="text-white">t</span>&nbsp;
                  </div>
                  <div className="inline-block">
                    <span className="text-white">s</span>
                    <span className="text-white">e</span>
                    <span className="text-white">r</span>
                    <span className="text-white">v</span>
                    <span className="text-white">e</span>
                    <span className="text-white">r</span>
                    <span className="text-white">s</span>&nbsp;
                  </div>
                  <div className="inline-block">
                    <span className="text-white">u</span>
                    <span className="text-white">s</span>
                    <span className="text-white">i</span>
                    <span className="text-white">n</span>
                    <span className="text-white">g</span>&nbsp;
                  </div>
                  <div className="inline-block">
                    <span className="text-white">c</span>
                    <span className="text-white">r</span>
                    <span className="text-white">y</span>
                    <span className="text-white">p</span>
                    <span className="text-white">t</span>
                    <span className="text-white">o</span>&nbsp;
                  </div>
                  <div className="inline-block">
                    <span className="text-white">w</span>
                    <span className="text-white">i</span>
                    <span className="text-white">t</span>
                    <span className="text-white">h</span>&nbsp;
                  </div>
                  <div className="inline-block">
                    <span className="text-purple-600 font-secondary">C</span>
                    <span className="text-purple-600 font-secondary">L</span>
                    <span className="text-purple-600 font-secondary">O</span>
                    <span className="text-purple-600 font-secondary">U</span>
                    <span className="text-purple-600 font-secondary">D</span>
                    <span className="text-purple-600 font-secondary"> </span>
                    <span className="text-purple-600 font-secondary">A</span>
                    <span className="text-purple-600 font-secondary">I</span>
                    <span className="text-purple-600 font-secondary">.</span>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <span className="block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-purple-600 opacity-0"></span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <a
              className="no-underline"
              href="https://t.me/HostAIEthPortal"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="z-0 group relative inline-flex box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 gap-unit-2 [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover w-40 h-10 text-sm rounded-md items-center justify-center bg-white text-black"
                type="button"
              >
                Join us
              </button>
            </a>
            <a
              href="https://app.uniswap.org/#/swap?&amp;chain=mainnet&amp;use=v2&amp;outputCurrency=0x07e128e823D2b9B22EdBdA43820aA1a72DE99613"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 text-small gap-unit-2 [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover w-40 h-10 rounded-md bg-purple-600 text-white"
                type="button"
              >
                Buy $CLOUDAI
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute z-10 bottom-0 pb-20 flex space-x-4 mt-4">
        <a
          href="https://twitter.com/HostAIETH"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="hover:text-purple-600 hover:scale-125 duration-200 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
        </a>
        <a href="https://t.me/HostAIEthPortal" target="_blank" rel="noreferrer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            className="hover:text-purple-600 hover:scale-125 duration-200 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
          </svg>
        </a>
        <a href="https://hostai.gitbook.io/" target="_blank" rel="noreferrer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="hover:text-purple-600 hover:scale-125 duration-200 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"></path>
          </svg>
        </a>
        <a
          href="https://etherscan.io/address/0x07e128e823D2b9B22EdBdA43820aA1a72DE99613"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            className="hover:text-purple-600 hover:scale-125 duration-200 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
