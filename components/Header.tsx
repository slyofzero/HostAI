"use client";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "./blockchain";
import { useCallback, useEffect } from "react";
import { JWTKeyName, signingMessage } from "@/utils/constants";
import { apiPoster } from "@/utils/api";
import { JWTResponse } from "@/types";
import { useAuth } from "@/state";

const navItemStyle =
  "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover bg-transparent text-sm no-underline";

export function Header() {
  const { address, isConnected, signMessageAsync, setIsSigned } = useAuth();

  const signIn = useCallback(
    async function signIn() {
      const signature = await signMessageAsync({ message: signingMessage });
      const body = { address, signature };
      const { token } = (await apiPoster<JWTResponse>("/api/auth", body)).data;

      localStorage.setItem(JWTKeyName, String(token));
      setIsSigned(true);
    },
    [signMessageAsync, address, setIsSigned]
  );

  useEffect(() => {
    setIsSigned(false);

    const authToken = localStorage.getItem(JWTKeyName);
    if (isConnected) {
      if (!authToken) signIn();
      else setIsSigned(true);
    }
  }, [isConnected, signIn, setIsSigned]);

  return (
    <div className="navbar absolute flex flex-col sm:items-center items-start sm:justify-center justify-start w-full pt-4 sm:px-0 px-8 z-50">
      <div className="max-w-[1300px] w-full flex items-center justify-center">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute top-0 right-0 mr-10 mt-14 sm:hidden"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <div className="w-full">
          <a href="/">
            <Image
              height={200}
              width={200}
              className="max-w-[80px]"
              src="/logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-col gap-12 justify-end sm:w-full w-[90%] sm:flex-row sm:relative absolute sm:mt-0 mt-56 sm:flex hidden">
          <Link
            className={navItemStyle}
            role="button"
            tabIndex={0}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className={navItemStyle}
            role="button"
            tabIndex={0}
            href="/use-case"
          >
            Use Case
          </Link>
          <Link
            href="https://hostai.gitbook.io/hostai"
            target="_blank"
            className={navItemStyle}
          >
            Gitbook
          </Link>
          <Link
            className={navItemStyle}
            role="button"
            tabIndex={0}
            href="/dashboard"
          >
            Dashboard{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
            </svg>
          </Link>

          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
