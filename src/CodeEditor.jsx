import React, { useState, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import './style.css';
import { CODE_SNIPPETS } from './constant';
import LanguageSelector from './LanguageSelector';
import { executeCode } from "./constant"; 

const CodeEditor = () => {
  const editorRef = useRef(); // Ref for the editor instance
  const [language, setLanguage] = useState('cpp');
  const [value, setValue] = useState(CODE_SNIPPETS['cpp']);
  const [output, setOutput] = useState(""); // State to store code execution output

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage] || '');
  };

  const onMount = (editor) => {
    editorRef.current = editor; // Capture the editor instance on mount
    editor.focus();
  };

  const runCode = async () => {
    // Ensure editorRef is defined and has an editor instance
    if (!editorRef.current) return;

    const sourceCode = editorRef.current.getValue(); // Get the code from the editor
    if (!sourceCode) return;

    try {
      // Execute code using Piston API (assuming you have an executeCode function)
      const response = await executeCode(language, sourceCode);

      // Capture and display the output
      setOutput(response.run?.output || "No output available.");
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("Error executing code.");
    }
  };

  return (
    <div>
      <div>
        Language:
        <LanguageSelector language={language} handleLanguageChange={handleLanguageChange} />
        <button className="btn-run" onClick={runCode}>
          RUN
        </button>
      </div>
      <div className='files'>
         main.cpp
      </div>

      <Editor
        height="52vh"
        language={language}
        value={value}
        theme="vs-dark"
        onMount={onMount} // Capture editor instance
        onChange={(newValue) => setValue(newValue || '')}       
      />

    <pre className="Output">{output}</pre>
     
    </div>
  );
};

export default CodeEditor;
