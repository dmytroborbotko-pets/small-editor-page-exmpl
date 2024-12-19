import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionState } from "../../types/selection/selection-state";

const initialState: SelectionState = {
  selectedRowId: null,
  selectedColumnId: null,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectRow: (state, action: PayloadAction<string | null>) => {
      state.selectedRowId = action.payload;
      state.selectedColumnId = null;
    },
    selectColumn: (
      state,
      action: PayloadAction<{
        rowId: string;
        columnId: string;
      }>
    ) => {
      state.selectedRowId = action.payload.rowId;
      state.selectedColumnId = action.payload.columnId;
    },
    clearSelection: (state) => {
      state.selectedRowId = null;
      state.selectedColumnId = null;
    },
  },
});

export const { selectRow, selectColumn, clearSelection } = selectionSlice.actions;
export default selectionSlice.reducer;
