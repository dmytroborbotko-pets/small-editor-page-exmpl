import { FC } from "react";
import { ContentEditor } from "../../components/editor/content-editor";
import { ContentViewer } from "../../components/editor/content-viewer";
import { useAppDispatch } from "../../redux/hooks";
import { clearSelection, selectColumn, selectRow } from "../../redux/reducers/selections-slice";

export const EditorPage: FC = () => {
  const dispatch = useAppDispatch();

  const handleStageSelect = () => {
    dispatch(clearSelection());
  };

  const handleRowSelect = (rowId: string) => {
    dispatch(selectRow(rowId));
  };

  const handleColumnSelect = (rowId: string, columnId: string) => {
    dispatch(selectColumn({ rowId, columnId }));
  };

  return (
    <div className="editor">
      <ContentViewer
        onStageSelect={handleStageSelect}
        onRowSelect={handleRowSelect}
        onColumnSelect={handleColumnSelect}
      />
      <ContentEditor />
    </div>
  );
};
