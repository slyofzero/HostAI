"use client";
import {
  DeployInstance,
  DeployInstanceButton,
  Instances,
  Modal,
  ServerTypeToggle,
  ShowWhen,
} from "@/components";
import { SepoliaQrCode } from "@/components/QRCode";
import { useGlobalStates } from "@/state";

export default function Dashboard() {
  const { showInstances } = useGlobalStates();

  return (
    <div className="min-h-[100vh] w-full relative flex flex-col items-center justify-center antialiased">
      <div className="mt-12 h-[80vh] max-w-[1300px] overflow-y-auto rounded-lg border border-neutral-900 bg-neutral-900 bg-opacity-50 w-full z-10 relative flex flex-col p-14">
        <div className="w-full flex flex-row">
          <ShowWhen show={<ServerTypeToggle />} when={showInstances} />

          <div className="w-full flex justify-end">
            <DeployInstanceButton />
          </div>
        </div>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider my-4"
          role="separator"
        />

        <ShowWhen
          show={<Instances />}
          when={showInstances}
          otherwise={<DeployInstance />}
        />
      </div>
    </div>
  );
}
