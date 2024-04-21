"use client";
import { useApi } from "@/hooks";
import { DeployInstanceButton } from "./DeployInstance";
import { StoredInstance } from "@/types";
import { useMemo } from "react";
import { ShowWhen } from "./utils";
import { classNames } from "@/utils/styling";
import { instanceLocations } from "@/data";
import moment from "moment";

interface SWRResponse {
  instances: StoredInstance[];
}

interface Props {
  instance: StoredInstance;
}

export function Instance({ instance }: Props) {
  const location = instanceLocations[instance.location].title;
  const date = new Date(instance.terminatesAt.seconds * 1000); // Convert seconds to milliseconds
  const terminatesAt = moment(date).format("DD-MM-YYYY");

  return (
    <div
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
