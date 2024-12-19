import { FC } from "react";
import { updateColumn } from "../../../../../redux/reducers/editor-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { Section } from "../../../../shared/section";
import { TextField } from "../../../../shared/text-field";

export const ImageSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRowId = useAppSelector((state) => state.selection.selectedRowId);
  const selectedColumnId = useAppSelector((state) => state.selection.selectedColumnId);
  const selectedColumn = useAppSelector((state) =>
    selectedRowId && selectedColumnId
      ? state.editor.rows.find((r) => r.id === selectedRowId)?.columns.find((c) => c.id === selectedColumnId)
      : null
  );

  if (!selectedRowId || !selectedColumnId || selectedColumn?.type !== "image") return null;

  return (
    <Section title="Image">
      <TextField
        label="URL"
        value={selectedColumn.content}
        onChange={(content) =>
          dispatch(updateColumn({ rowId: selectedRowId, columnId: selectedColumnId, updates: { content } }))
        }
      />
    </Section>
  );
};
