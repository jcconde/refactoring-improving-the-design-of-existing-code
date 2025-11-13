import { Performance } from "./performance";

export interface Invoice {
  customer: string;
  performances: Performance[]
}