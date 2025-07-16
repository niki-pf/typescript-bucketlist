import { BucketListItem } from "./models/bucketListItems";
interface Dream {
  id: number;
  name: string;
  theme: string;
  checked: boolean;
}

export const themes = [
  "teknikdrömmar",
  "vardagsdrömmar",
  "husdrömmar",
  "sportdrömmar",
  "resdrömmar",
];
export let name = "NAMN";
export const dreams: BucketListItem[] = [
  {
    id: 1,
    name: "Börja fylla min Bucket list",
    theme: "vardagsdrömmar",
    checked: true,
  },
];
