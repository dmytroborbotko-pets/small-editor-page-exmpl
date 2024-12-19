import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { EditorState } from "../types/editor/editor-state";

const STORAGE_KEY = "editor_state";

export const useEditorState = () => {
  const editorState = useAppSelector((state) => state.editor);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editorState));
  }, [editorState]);
};

export const loadEditorState = (): EditorState | undefined => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? (JSON.parse(savedState) as EditorState) : undefined;
  } catch (err) {
    console.warn("Failed to load editor state:", err);
    return undefined;
  }
};
