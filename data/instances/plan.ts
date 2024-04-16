import { InstanceType } from "./types";

export interface PlanDetails {
  name: string;
  cores: string;
  memory: string;
  storage: string;
  bandwidth: string;
  price: number;
  hourlyRate: number;
}

export const instancePlans: {
  [K in InstanceType]: { [key: string]: PlanDetails };
} = {
  cloud_compute: {
    competitor: {
      name: "Competitor",
      cores: "8-core 3.1GHz",
      memory: "12GB",
      storage: "512GB SSD",
      bandwidth: "1GB",
      price: 40,
      hourlyRate: 0.055,
    },
    premium: {
      name: "Premium",
      cores: "8-core 3.7GHz",
      memory: "28GB",
      storage: "512GB SSD",
      bandwidth: "1GB",
      price: 65,
      hourlyRate: 0.089,
    },
  },
  dedicated: {
    basic: {
      name: "Basic",
      cores: "4-core 8-thread",
      memory: "16GB",
      storage: "1TB HDD + RAID 1",
      bandwidth: "1GB",
      price: 300,
      hourlyRate: 0.411,
    },
    premium: {
      name: "Premium",
      cores: "12-core 24-thread",
      memory: "64GB",
      storage: "2TB HDD + RAID 1",
      bandwidth: "1GB",
      price: 450,
      hourlyRate: 0.616,
    },
  },
  gaming: {
    small: {
      name: "Small DataPack",
      cores: "1 vCPU",
      memory: "2GB",
      storage: "80GB SSD (100GB Block)",
      bandwidth: "1GB",
      price: 20,
      hourlyRate: 0.027,
    },
    big: {
      name: "Big DataPack",
      cores: "4 vCPU",
      memory: "8GB",
      storage: "80GB SSD (100GB Block)",
      bandwidth: "1GB",
      price: 60,
      hourlyRate: 0.082,
    },
  },
};
