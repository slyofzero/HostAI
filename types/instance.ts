import { InstanceType, Locations } from "@/data";
import { Timestamp } from "firebase-admin/firestore";

export interface StoredInstance {
  id?: string;
  serverType: string;
  hash: string;
  user: string;
  status: "ACTIVE" | "TERMINATED";
  terminatesAt: Timestamp;
  plan: string;
  type: InstanceType;
  location: Locations;
}
