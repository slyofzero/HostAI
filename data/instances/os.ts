import { InstanceType } from "./types";

export type OSTypes = "ubuntu" | "windows";

export interface OSDetails {
  icon: string;
  title: string;
}

export const instanceOs: { [K in OSTypes]: OSDetails } = {
  ubuntu: {
    icon: "./ubuntu.svg",
    title: "Ubuntu",
  },
  windows: {
    icon: "./windows.svg",
    title: "Windows",
  },
};

export const instanceTypeOS: {
  [K in InstanceType]: { [K in OSTypes]: OSDetails };
} = {
  cloud_compute: instanceOs,
  dedicated: instanceOs,
  // @ts-ignore
  gaming: { windows: instanceOs.windows },
};
