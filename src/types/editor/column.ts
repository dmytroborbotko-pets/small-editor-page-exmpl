export type TextAlign = "left" | "center" | "right";
export type ColumnType = "text" | "image" | "";

export interface Column {
  id: string;
  type: ColumnType;
  content: string;
  textAlign?: TextAlign;
}
