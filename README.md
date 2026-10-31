# Managing Dependencies in Node.js - NPM, package.json, and Nodemon

This project is built based on the Sharpener Node.js modules covering NPM, package.json, Dependencies vs DevDependencies, and Nodemon workflow.

## Project Structure
```
├── .gitignore          # Ignores node_modules
├── index.js            # Node HTTP server serving HTML responses
├── package.json        # Project metadata, scripts, dependencies & devDependencies
├── NOTES.md            # In-depth notes and conceptual Q&A answers
└── README.md           # Project overview and instructions
```

## How to Run This Project

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Server with Nodemon (Auto-restart on code change):**
   ```bash
   npm start
   ```

3. **Run Server with Plain Node:**
   ```bash
   npm run start:node
   ```

4. **Access in Browser:**
   Open [http://localhost:3000](http://localhost:3000) to see:
   - `<h1>Hello from Sharpener</h1>`
   - `<h3>This is page 1</h3>`
   - `<h3>I love coding</h3>`
