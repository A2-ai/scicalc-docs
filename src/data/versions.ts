export interface Version {
  tag: string;
  label: string;
  default?: boolean;
}

export const VERSIONS: Version[] = [
  {
    tag: "0.2.1",
    label: "0.2.1",
  },
  {
    tag: "",
    label: "v0.2.1",
  },
  {
    tag: "",
    label: "",
    default: true,
  },
];

export const CURRENT_VERSION = "dev";
