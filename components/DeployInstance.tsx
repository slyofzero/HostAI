"use client";
import { useGlobalStates } from "@/state";
import Image from "next/image";
import { SelectTick } from "./SelectTick";
import {
  InstanceType,
  Locations,
  instanceLocations,
  instanceTypes,
} from "@/data";
import { InstanceLocation, InstanceTypeComp } from "./dashboard";

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
          {Object.entries(instanceTypes).map(([key, value]) => (
            <InstanceTypeComp key={key} {...value} type={key as InstanceType} />
          ))}
        </div>
      </div>
      <div className="w-full mt-14">
        <h2 className="text-2xl">Choose Location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          {Object.entries(instanceLocations).map(([key, value]) => (
            <InstanceLocation
              key={key}
              {...value}
              location={key as Locations}
            />
          ))}
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
        <h2 className="text-2xl">Choose Plan</h2>
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
