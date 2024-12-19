import { FC } from "react";
import { updateColumn } from "../../../../../redux/reducers/editor-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { TextAlign } from "../../../../../types/editor/column";
import { Icons } from "../../../../icons";
import { ButtonGroup } from "../../../../shared/button-group";
import { Section } from "../../../../shared/section";
import { TextArea } from "../../../../shared/text-area";

export const TextSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRowId = useAppSelector((state) => state.selection.selectedRowId);
  const selectedColumnId = useAppSelector((state) => state.selection.selectedColumnId);
  const selectedColumn = useAppSelector((state) =>
    selectedRowId && selectedColumnId
      ? state.editor.rows.find((r) => r.id === selectedRowId)?.columns.find((c) => c.id === selectedColumnId)
      : null
  );

  if (!selectedRowId || !selectedColumnId || selectedColumn?.type !== "text") return null;

  return (
    <Section title="Text">
      <ButtonGroup
        label="Alignment"
        value={selectedColumn.textAlign || "left"}
        options={[
          { value: "left", icon: <Icons.TextAlignLeft /> },
          { value: "center", icon: <Icons.TextAlignCenter /> },
          { value: "right", icon: <Icons.TextAlignRight /> },
        ]}
        onChange={(textAlign: TextAlign) =>
          dispatch(updateColumn({ rowId: selectedRowId, columnId: selectedColumnId, updates: { textAlign } }))
        }
      />
      <TextArea
        value={selectedColumn.content}
        onChange={(content) =>
          dispatch(updateColumn({ rowId: selectedRowId, columnId: selectedColumnId, updates: { content } }))
        }
      />
    </Section>
  );
};
