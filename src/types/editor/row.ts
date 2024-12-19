import { Column } from "./column";

export interface Row {
  id: string;
  columns: Column[];
}
