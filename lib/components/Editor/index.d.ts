import React, { HTMLAttributes } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/a11y-light.css';
import 'highlight.js/styles/default.css';
export interface EditorProps extends HTMLAttributes<any> {
    value?: string;
    onChange?: (value: string) => any;
}
declare const Editor: React.FC<EditorProps>;
export default Editor;
