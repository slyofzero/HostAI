"use client";
import { useGlobalStates } from "@/state";
import {
  InstanceType,
  Locations,
  OSTypes,
  instanceLocations,
  instanceTypeOS,
  instanceTypes,
} from "@/data";
import { InstanceLocation, InstanceOS, InstanceTypeComp } from "./dashboard";
import { useMemo, useState } from "react";
import { instancePlans } from "@/data/instances/plan";
import { InstancePlan } from "./dashboard/InstancePlan";
import { classNames } from "@/utils/styling";
import { Modal } from "./Modal";
import { ShowWhen } from "./utils";
import { clientPoster } from "@/utils/api";

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
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { deployInstance } = useGlobalStates();
  const allDeployInstanceFieldsFills = useMemo(
    () => Object.values(deployInstance).every((value) => Boolean(value)),
    [deployInstance]
  );

  function deployInstanceRequest() {
    if (!allDeployInstanceFieldsFills) return;
    setShowPaymentModal(true);
    clientPoster("/api/payment", deployInstance);
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto p-4">
      <ShowWhen
        show={<Modal setShowModal={setShowPaymentModal}>Doggie</Modal>}
        when={showPaymentModal}
      />

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
          {Object.entries(instanceTypeOS[deployInstance.type]).map(
            ([key, value]) => (
              <InstanceOS key={key} {...value} os={key as OSTypes} />
            )
          )}
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

          {Object.entries(instancePlans[deployInstance.type]).map(
            ([key, value]) => (
              <InstancePlan key={key} {...value} plan={key} />
            )
          )}
        </div>
      </div>

      <div className="w-full flex justify-end items-center mt-12 px-4">
        <button
          className={classNames(
            "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-unit-20 h-unit-10 text-small gap-unit-2 [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none  text-primary-foreground data-[hover=true]:opacity-hover max-w-fit px-8 rounded py-2 text-sm",
            allDeployInstanceFieldsFills
              ? "bg-primary cursor-pointer"
              : "cursor-default"
          )}
          type="button"
          onClick={deployInstanceRequest}
        >
          Deploy
        </button>
      </div>
    </div>
  );
}
