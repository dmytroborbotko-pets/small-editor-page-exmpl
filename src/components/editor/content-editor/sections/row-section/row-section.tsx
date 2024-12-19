import { FC } from "react";
import { addColumn } from "../../../../../redux/reducers/editor-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { Action } from "../../../../shared/action";
import { Section } from "../../../../shared/section";
import { selectColumn } from "../../../../../redux/reducers/selections-slice";

export const RowSection: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRowId = useAppSelector((state) => state.selection.selectedRowId);

  const handleAddColumn = () => {
    if (!selectedRowId) return;
    const columnId = dispatch(addColumn(selectedRowId));
    dispatch(selectColumn({ rowId: selectedRowId, columnId: columnId.payload.columnId }));
  };

  if (!selectedRowId) return null;

  return (
    <Section title="Row">
      <Action onClick={() => handleAddColumn()}>Add column</Action>
    </Section>
  );
};
