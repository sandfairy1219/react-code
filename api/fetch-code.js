const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'public', filename);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }
    res.status(200).json({ content: data });
  });
}
