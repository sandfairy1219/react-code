const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'public');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read directory' });
      return;
    }
    // .cpp 파일만 필터링 (필요한 경우)
    const cppFiles = files.filter(file => file.endsWith('.cpp'));
    res.status(200).json({ files: cppFiles });
  });
}
