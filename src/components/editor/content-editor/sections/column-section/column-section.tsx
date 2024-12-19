import { FC } from "react";
import { setColumnType } from "../../../../../redux/reducers/editor-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { ColumnType } from "../../../../../types/editor/column";
import { Icons } from "../../../../icons";
import { ButtonGroup } from "../../../../shared/button-group";
import { Section } from "../../../../shared/section";

export const ColumnSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRowId = useAppSelector((state) => state.selection.selectedRowId);
  const selectedColumnId = useAppSelector((state) => state.selection.selectedColumnId);
  const selectedColumn = useAppSelector((state) =>
    selectedRowId && selectedColumnId
      ? state.editor.rows.find((r) => r.id === selectedRowId)?.columns.find((c) => c.id === selectedColumnId)
      : null
  );

  if (!selectedRowId || !selectedColumnId) return null;

  const handleTypeChange = (type: ColumnType) => {
    dispatch(setColumnType({ rowId: selectedRowId, columnId: selectedColumnId, type }));
  };

  return (
    <Section title="Column">
      <ButtonGroup
        label="Contents"
        value={selectedColumn?.type || ""}
        options={[
          { value: "text", icon: <Icons.Text /> },
          { value: "image", icon: <Icons.Image /> },
        ]}
        onChange={handleTypeChange}
      />
    </Section>
  );
};
