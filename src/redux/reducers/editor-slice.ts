import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { loadEditorState } from "../../hooks/useEditorState";
import { Column, ColumnType } from "../../types/editor/column";
import { EditorState } from "../../types/editor/editor-state";

const defaultState: EditorState = {
  rows: [
    {
      id: uuidv4(),
      columns: [
        {
          id: uuidv4(),
          type: "text",
          content: "# Create your first page!",
          textAlign: "center",
        },
      ],
    },
  ],
};

const initialState = loadEditorState() || defaultState;

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addRow: {
      prepare: () => {
        const rowId = uuidv4();
        return { payload: rowId };
      },
      reducer: (state, action: PayloadAction<string>) => {
        state.rows.push({
          id: action.payload,
          columns: [],
        });
      },
    },
    addColumn: {
      prepare: (rowId: string) => {
        const columnId = uuidv4();
        return { payload: { rowId, columnId } };
      },
      reducer: (state, action: PayloadAction<{ rowId: string; columnId: string }>) => {
        const row = state.rows.find((r) => r.id === action.payload.rowId);
        if (row) {
          row.columns.push({
            id: action.payload.columnId,
            type: "",
            content: "",
            textAlign: "left",
          });
        }
      },
    },
    updateColumn: (
      state,
      action: PayloadAction<{
        rowId: string;
        columnId: string;
        updates: Partial<Column>;
      }>
    ) => {
      const { rowId, columnId, updates } = action.payload;
      const row = state.rows.find((r) => r.id === rowId);
      if (row) {
        const column = row.columns.find((c) => c.id === columnId);
        if (column) {
          Object.assign(column, updates);
        }
      }
    },
    setColumnType: (
      state,
      action: PayloadAction<{
        rowId: string;
        columnId: string;
        type: ColumnType;
      }>
    ) => {
      const { rowId, columnId, type } = action.payload;
      const row = state.rows.find((r) => r.id === rowId);
      if (row) {
        const column = row.columns.find((c) => c.id === columnId);
        if (column) {
          column.type = type;
          column.content = "";
          if (type === "text") {
            column.textAlign = "left";
          } else {
            delete column.textAlign;
          }
        }
      }
    },
  },
});

export const { addRow, addColumn, updateColumn, setColumnType } = editorSlice.actions;
export default editorSlice.reducer;
