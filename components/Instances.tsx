"use client";
import { useApi } from "@/hooks";
import { DeployInstanceButton } from "./DeployInstance";
import { StoredInstance } from "@/types";
import { useMemo, useState } from "react";
import { ShowWhen } from "./utils";
import { classNames } from "@/utils/styling";
import { instanceLocations } from "@/data";
import moment from "moment";
import { Modal } from "./Modal";
import { clientFileDownload } from "@/utils/api";

interface SWRResponse {
  instances: StoredInstance[];
}

interface Props {
  instance: StoredInstance;
}

export function Instance({ instance }: Props) {
  const location = instanceLocations[instance.location].title;
  // @ts-ignore
  const date = new Date(instance.terminatesAt._seconds * 1000); // Convert seconds to milliseconds
  const terminatesAt = moment(date).format("DD/MM/YYYY");

  const [showInstanceModal, setShowInstanceModal] = useState(false);
  const onClick = () => {
    setShowInstanceModal(true);
  };

  function downloadKeyPair() {
    clientFileDownload(`/api/keyPair/${instance.hash}`, instance.keypair);
  }

  const instanceModal = (
    <Modal size="lg" setShowModal={setShowInstanceModal}>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          SSH Command
        </label>
        <div
          className="p-[2px] rounded-lg transition duration-300 group/input"
          style={{
            background:
              "radial-gradient(0px circle at 48px 34.633331298828125px,var(--blue-500),transparent 80%",
          }}
        >
          <div className="bg-zinc-800 text-white px-3 py-2 rounded-md text-sm">
            {instance.sshCommand}
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <span className="whitespace-nowrap">Key Pair -</span>

        <button
          onClick={downloadKeyPair}
          className="bg-zinc-800 text-white px-3 py-2 rounded-md text-sm"
        >
          {instance.keypair}
        </button>

        <span className="text-sm">
          Download the keypair and keep it safe as you won&apos;t be able to
          download it again.
        </span>
      </div>
    </Modal>
  );

  return (
    <>
      <ShowWhen show={instanceModal} when={showInstanceModal} />

      <div
        onClick={onClick}
        className={classNames(
          "flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer bg-opacity-50 transition-colors"
        )}
      >
        <p className="w-full text-sm font-bold capitalize">{instance.type}</p>
        <p className="w-full text-sm capitalize">{instance.plan}</p>
        <p className="w-full text-sm capitalize">{location}</p>
        <p className="w-full text-sm">{instance.status}</p>
        <p className="w-full text-sm">{terminatesAt}</p>
        <p className="w-full text-sm">{instance.hash}.pem</p>

        {/* <p className="w-full text-sm">
        <span className="font-bold">${props.price}/month</span> <br />$
        {props.hourlyRate}/hour
      </p> */}
      </div>
    </>
  );
}

export function Instances() {
  const { data } = useApi<SWRResponse>("/api/instances");
  const hasNoInstances = useMemo(() => data?.instances.length === 0, [data]);

  const noInstances = (
    <>
      <h1 className="text-4xl font-bold text-neutral-100">
        Welcome to the Cloud
      </h1>
      <p className="text-neutral-200">
        Get started by deploying your first instance
      </p>

      <DeployInstanceButton />
    </>
  );

  const instances = (
    <div className="w-full">
      <h2 className="text-2xl">Instances</h2>
      <div className="w-full rounded border border-neutral-800 mt-6">
        <div className="flex flex-row items-center p-2 border-b border-neutral-800">
          <p className="w-full text-sm text-zinc-400">Type</p>
          <p className="w-full text-sm text-zinc-400">Plan</p>
          <p className="w-full text-sm text-zinc-400">Location</p>
          <p className="w-full text-sm text-zinc-400">Status</p>
          <p className="w-full text-sm text-zinc-400">Terminates At</p>
          <p className="w-full text-sm text-zinc-400">Keypair</p>
        </div>

        {data?.instances.map((instance, key) => (
          <Instance key={key} instance={instance} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={classNames(
        "w-full h-full flex flex-col items-center",
        hasNoInstances ? "justify-center" : ""
      )}
    >
      <ShowWhen
        show={noInstances}
        when={hasNoInstances}
        otherwise={instances}
      />
    </div>
  );
}
