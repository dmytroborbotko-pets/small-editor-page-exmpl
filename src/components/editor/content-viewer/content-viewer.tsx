import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { Column } from "../../column";
import { ImagePlaceholder } from "../../image-placeholder";
import { Markdown } from "../../markdown";
import { Row } from "../../row";
import { Stage } from "../../stage";

export const ContentViewer: FC<{
  onStageSelect(): void;
  onRowSelect(rowId: string): void;
  onColumnSelect(rowId: string, columnId: string): void;
}> = ({ onStageSelect, onRowSelect, onColumnSelect }) => {
  const rows = useAppSelector((state) => state.editor.rows);
  const selectedRowId = useAppSelector((state) => state.selection.selectedRowId);
  const selectedColumnId = useAppSelector((state) => state.selection.selectedColumnId);

  return (
    <Stage onSelect={onStageSelect}>
      {rows.map((row) => (
        <Row key={row.id} selected={row.id === selectedRowId && !selectedColumnId} onSelect={() => onRowSelect(row.id)}>
          {row.columns.map((column) => (
            <Column
              key={column.id}
              selected={column.id === selectedColumnId}
              onSelect={() => onColumnSelect(row.id, column.id)}
            >
              {column.type === "text" ? (
                column.content ? (
                  <Markdown className={`text-align-${column.textAlign || "left"}`}>{column.content}</Markdown>
                ) : null
              ) : null}
              {column.type === "image" && (column.content ? <img src={column.content} alt="" /> : <ImagePlaceholder />)}
            </Column>
          ))}
        </Row>
      ))}
    </Stage>
  );
};
