
const LanguageSelector = ({ language, handleLanguageChange }) => {
  return (
    <select onChange={handleLanguageChange} value={language}>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="cpp">C++</option>
      <option value="csharp">C#</option>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="json">JSON</option>
      <option value="php">PHP</option>
      <option value="sql">SQL</option>
      <option value="xml">XML</option>
    </select>
  );
};

export default LanguageSelector;
