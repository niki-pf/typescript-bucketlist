import { BucketListItem } from "../models/bucketListItems.js";
const DREAMS_KEY = "bucketlist_dreams";

export function getSavedDreams(): BucketListItem[] | null {
  const json = localStorage.getItem(DREAMS_KEY);
  if (!json) return null;
  try {
    return JSON.parse(json) as BucketListItem[];
  } catch {
    return null;
  }
}

export function saveDreams(dreams: BucketListItem[]): void {
  localStorage.setItem(DREAMS_KEY, JSON.stringify(dreams));
}
