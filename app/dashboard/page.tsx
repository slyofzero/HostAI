"use client";
import {
  DeployInstance,
  DeployInstanceButton,
  Instances,
  ServerTypeToggle,
  ShowWhen,
} from "@/components";
import { ConnectButton } from "@/components/blockchain";
import { useAuth, useGlobalStates } from "@/state";
import { useMemo } from "react";

export default function Dashboard() {
  const { showInstances } = useGlobalStates();
  const { isConnected, isSigned } = useAuth();
  const isConnectedAndSigned = useMemo(
    () => isSigned && isConnected,
    [isSigned, isConnected]
  );

  const connectedDashboard = (
    <ShowWhen
      show={<Instances />}
      when={showInstances}
      otherwise={<DeployInstance />}
    />
  );

  const disconnectedDashboard = (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold text-neutral-100">
        Sign In to view Dashboard
      </h1>
      <p className="text-neutral-200 w-1/3 text-center">
        To deploy a server or view your existing ones, please sign in using your
        Ethereum wallet
      </p>

      <div className="mt-4">
        <ConnectButton />
      </div>
    </div>
  );

  return (
    <div className="min-h-[100vh] w-full relative flex flex-col items-center justify-center antialiased">
      <div className="mt-12 h-[80vh] max-w-[1300px] overflow-y-auto rounded-lg border border-neutral-900 bg-neutral-900 bg-opacity-50 w-full z-10 relative flex flex-col p-14">
        <div className="w-full flex flex-row">
          {/* <ShowWhen show={<ServerTypeToggle />} when={showInstances} /> */}

          <div className="w-full flex justify-end">
            <ShowWhen
              show={<DeployInstanceButton />}
              when={isConnectedAndSigned}
            />
          </div>
        </div>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider my-4"
          role="separator"
        />

        <ShowWhen
          show={connectedDashboard}
          when={isConnectedAndSigned}
          otherwise={disconnectedDashboard}
        />
      </div>
    </div>
  );
}
