import { FC } from "react";
import { addRow } from "../../../../../redux/reducers/editor-slice";
import { useAppDispatch } from "../../../../../redux/hooks";
import { selectRow } from "../../../../../redux/reducers/selections-slice";
import { Action } from "../../../../shared/action";
import { Section } from "../../../../shared/section";

export const PageSection: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddRow = () => {
    const rowId = dispatch(addRow());
    dispatch(selectRow(rowId.payload));
  };

  return (
    <Section title="Page">
      <Action onClick={() => handleAddRow()}>Add row</Action>
    </Section>
  );
};
