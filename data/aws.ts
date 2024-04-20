import { InstanceType, Locations, OSTypes } from "./instances";

export const ec2Instances: {
  [K in InstanceType]: { [key: string]: string };
} = {
  cloud_compute: {
    competitor: "t3a.medium",
    premium: "t3a.large",
  },
  dedicated: {
    basic: "t3.xlarge",
    premium: "t3.2xlarge",
  },
  gaming: {
    small: "t3a.small",
    big: "t3a.large",
  },
};

export const amiIds: {
  [K in Locations]: { [K in OSTypes]: string };
} = {
  us: {
    ubuntu: "ami-080e1f13689e07408",
    windows: "ami-0f496107db66676ff",
  },
  uk: {
    ubuntu: "ami-0b9932f4918a00c4f",
    windows: "ami-04ae4ddfe3f32eb6e",
  },
  fr: {
    ubuntu: "ami-00c71bd4d220aa22a",
    windows: "ami-04418b7c615547159",
  },
  sp: {
    ubuntu: "ami-06c4be2792f419b7b",
    windows: "ami-0a3ff097090be9c13",
  },
};

export const awsLocations: { [K in Locations]: string } = {
  us: "us-east-1",
  uk: "eu-west-2",
  fr: "eu-west-3",
  sp: "api-southeast-1",
};
