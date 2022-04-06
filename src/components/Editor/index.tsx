import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { mdParser, upload } from "@/index";
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/a11y-light.css'
import 'highlight.js/styles/default.css'
//@ts-ignore
export interface EditorProps extends HTMLAttributes<any> {
  value?: string;
  onChange?: (value: string) => any
}
const Editor: React.FC<EditorProps> = ({ value, onChange }) => {

  const [markdown, setMarkdown] = useState(value || "");

  useEffect(() => {
    if (value) setMarkdown(value)
  }, [value]);

  const handleMdUpload = useCallback(
    async (file: File) => {

      const formData = new FormData();

      formData.append(file.name, file);

      const imgFile = await upload(formData);

      return imgFile.url;

    },
    [],
  );
  return <MdEditor onImageUpload={handleMdUpload} value={markdown} style={{ height: '500px' }} onChange={({ text }) => {
    setMarkdown(text);
    onChange && onChange(text);
  }} renderHTML={text => mdParser.render(text)} />
}
export default Editor