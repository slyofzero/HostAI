import { InstanceType, Locations } from "@/data";
import { atom, useAtom } from "jotai";

interface DeployInstance {
  type: InstanceType;
  location: Locations;
  os: string;
  plan: string;
}

const initialInstanceChoice: DeployInstance = {
  type: "cloud_compute",
  location: "us",
  os: "ubuntu",
  plan: "competitor",
};

const deployInstanceAtom = atom<DeployInstance>(initialInstanceChoice);

export function useDeployInstance() {
  const [deployInstance, setDeployInstance] = useAtom(deployInstanceAtom);
  return { deployInstance, setDeployInstance };
}
