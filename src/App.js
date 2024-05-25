import React, { useState, useEffect } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFileList();
  }, []);

  const fetchFileList = async () => {
    try {
      const response = await fetch('/api/file-list');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Files:', data.files); // 콘솔에 파일 목록 출력
      setFiles(data.files);
    } catch (error) {
      console.error('Error fetching file list:', error);
    }
  }; // 이 부분에 세미콜론 추가

  const loadCode = async (filename) => {
    try {
      const response = await fetch(`/api/fetch-code?filename=${filename}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCode(data.content);
    } catch (error) {
      console.error('Error fetching code:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Load C++ Code File Example</h1>
      {files.map((file, index) => (
        <button 
          key={index} 
          onClick={() => loadCode(file)} 
          style={{ display: 'block', margin: '10px 0' }}
        >
          {file}
        </button>
      ))}
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f0f0f0', padding: '10px' }}>
        {code}
      </pre>
    </div>
  );
}

export default App;
