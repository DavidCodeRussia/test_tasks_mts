import { useRef, useState } from 'react';
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import Grid from '@mui/material/Grid';
import { Editor } from '@monaco-editor/react';
import { schema } from '../__mocks__';
import { IEditor, ISubmitProps } from '../types';
import styles from './FormGenerator.module.scss';

function FormGenerator() {
  const [json, setJson] = useState(schema);
  const editorRef = useRef<null | IEditor>(null);

  function handleEditorDidMount(editor: IEditor) {
    editorRef.current = editor;
  }

  function onEditorChanged() {
    let schema;
    let isValidJSON = true;
    try {
        schema = JSON.parse(editorRef.current ? editorRef.current.getValue() : '')
    } catch {
      isValidJSON = false; 
    }
    if (isValidJSON) {
      setJson(schema)
    }
  }
  function submit(val: ISubmitProps) {
    alert(`Форма отправлена! ${JSON.stringify(val?.formData)}`)
  }
  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={7}>
        <Editor
          height="80vh"
          defaultLanguage="JSON"
          defaultValue={JSON.stringify(schema)}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={onEditorChanged}
        />
      </Grid>
      <Grid item xs={5} className={styles.editor}>
        <Form
          schema={json}
          validator={validator}
          onSubmit={submit}
        />
      </Grid>
    </Grid>
  )
}

export default FormGenerator