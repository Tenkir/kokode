import { FC } from "react";
import { CustomText, ElementProps } from ".";

export type CodeElement = {
  type: 'code',
  children: {
    text: CustomText[];
  };
}

export const CodeElement: FC<ElementProps<HTMLPreElement>> = ({ attributes, children }) => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
)
