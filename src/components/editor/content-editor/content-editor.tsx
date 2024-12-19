import { FC } from "react";
import { useEditorState } from "../../../hooks/useEditorState";
import { ColumnSection, ImageSection, PageSection, RowSection, TextSection } from "./sections";

export const ContentEditor: FC = () => {
  useEditorState();

  return (
    <div className="properties">
      <PageSection />
      <RowSection />
      <ColumnSection />
      <TextSection />
      <ImageSection />
    </div>
  );
};
