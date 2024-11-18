import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());

// Serve static files from the current directory (no 'public' folder needed)
app.use(express.static(__dirname)); // Serve files from the root folder

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
