import { useCallback, useState } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact, RenderElementProps } from 'slate-react';
import type { BaseEditor, Descendant } from 'slate'
import type { ReactEditor } from 'slate-react';
import { CodeElement } from './elements/code';
import { DefaultElement } from './elements/default';
import { CustomText } from './elements';

type CustomElement = DefaultElement | CodeElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: CustomElement[] = [
  {
    type: "paragraph",
    children: [{ text: 'A line of text in a paragraph.' }]
  }
];

export const RichTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: RenderElementProps) => {
    switch(props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            // Prevent the "`" from being inserted by default.
            event.preventDefault();

            const match = Editor.nodes(editor, {
              match: (n) => {
                console.log(n);

                return true;
              }
            })

            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: (n) => Editor.isBlock(editor, n) }
            )
          }
        }}
      />
    </Slate>
  );
}
