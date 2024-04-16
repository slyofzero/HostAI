"use client";
import { PlanDetails } from "@/data/instances/plan";
import { useGlobalStates } from "@/state";
import { classNames } from "@/utils/styling";
import { useMemo } from "react";
import { ShowWhen } from "../utils";
import { SelectTick } from "../SelectTick";

interface Props extends PlanDetails {
  plan: string;
}

export function InstancePlan(props: Props) {
  const { deployInstance, setDeployInstance } = useGlobalStates();
  const isSelected = useMemo(
    () => deployInstance.plan === props.plan,
    [deployInstance, props]
  );
  function onClick() {
    setDeployInstance((prev) => ({ ...prev, plan: props.plan }));
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        "flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer bg-opacity-50 transition-colors",
        isSelected ? "bg-neutral-500 border-0" : "border-neutral-800"
      )}
    >
      <p className="w-full text-sm font-bold">{props.name}</p>
      <p className="w-full text-sm">{props.cores}</p>
      <p className="w-full text-sm">{props.memory}</p>
      <p className="w-full text-sm">{props.storage}</p>
      <p className="w-full text-sm">{props.bandwidth}</p>
      <p className="w-full text-sm">
        <span className="font-bold">${props.price}/month</span> <br />$
        {props.hourlyRate}/hour
      </p>
      <ShowWhen show={<SelectTick />} when={isSelected} />
    </div>
  );
}
