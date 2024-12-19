import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./redux/reducers/editor-slice";
import selectionReducer from "./redux/reducers/selections-slice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    selection: selectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
