import { FC } from "react"
import { CustomText, ElementProps } from "."

export type DefaultElement = {
  type: 'paragraph',
  children: CustomText[];
}

export const DefaultElement: FC<ElementProps<HTMLParagraphElement>> = ({ attributes, children }) => {
  return <p {...attributes}>{children}</p>
}
