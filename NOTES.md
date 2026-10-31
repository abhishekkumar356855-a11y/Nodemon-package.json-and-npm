# Node.js Notes: NPM, package.json, Dependencies & Nodemon

---

## Part 1: Key Concepts Notes

### 1. NPM (Node Package Manager) & Hardware Store Analogy
* **House Building Analogy:** Jab hum ek ghar banate hain, toh hum hammer, nails, ya measuring tape scratch se khud factory laga kar nahi banate. Hum seedha **Hardware Store** par jaate hain aur tools khareed lete hain.
* **NPM in Node.js:** NPM JavaScript/Node.js ecosystem ka sabse bada "Hardware Store" (package repository) hai. Jab hume kisi functionality (jaise web server, authentication, database connection, file utility) ki zaroorat hoti hai, hum NPM se pre-built packages (libraries/dependencies) download karke use kar sakte hain. Isse development fast, secure aur clean ho jati hai.

### 2. package.json File & Its Importance
* `package.json` kisi bhi Node.js project ka "Heart" ya "ID Card" hota hai.
* Yeh project ke metadata (naam, version, description, author, license) aur dependencies ko track karta hai.
* **Kaise create karein:** Terminal mein `npm init` command chalane par step-by-step project details enter ki jati hain (jaise Julian ne name `lecture`, description `This is my first project` rakha). `npm init -y` use karke direct default values ke sath bhi create kiya ja sakta hai.

### 3. Dependency Management & Team Collaboration
* **Problem without package.json:** Jab ek project par multiple developers kaam karte hain, toh code share karte waqt heavy `node_modules` folder share karna inefficient aur problematic hota hai. Agar `package.json` na ho, toh teammate ko manually har package ka naam aur version batana padega.
* **Solution:** `package.json` ke andar `dependencies` aur `devDependencies` sections hote hain jo har package aur uske version ko record rakhte hain.
* **Workflow:** Jab teammate project clone karta hai, use sirf `npm install` (ya `npm i`) run karna hota hai. NPM automatically `package.json` read karke saare required packages install kar deta hai.

### 4. Simple HTTP Server & NPM Scripts
* Node.js ke built-in `http` module (`const http = require('http');`) se server create kiya jata hai:
  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello from Sharpener</h1>');
    res.end();
  });
  server.listen(3000);
  ```
* **NPM Scripts:** Baar-baar terminal mein `node index.js` run karne ke bajaye hum `package.json` ke `"scripts"` section mein custom shortcuts define karte hain:
  ```json
  "scripts": {
    "start": "nodemon index.js",
    "start:node": "node index.js"
  }
  ```
  Isse hum terminal mein simply `npm start` chalakar server start kar sakte hain.

### 5. Problem of Manual Server Restarts
* Default Node.js behavior mein jab server chalu hota hai aur hum code mein changes (jaise new HTML text ya route) karte hain, toh Node.js purana cached code hi run karta rehta hai.
* Changes dekhne ke liye developer ko baar-baar `Ctrl + C` dabakar server stop karna padta hai aur dobara run karna padta hai, jisse productive time waste hota hai.

### 6. Nodemon (The Solution)
* **Nodemon** ek utility tool hai jo project files ko observe/watch karta rehta hai.
* Jaise hi koi file save/modify hoti hai, Nodemon instantly aur automatically Node server ko restart kar deta hai bina kisi manual intervention ke.

---

## Part 2: Dependencies vs DevDependencies

### House Building Analogy:
| Category | Ghar Banane Ki Misaal | Node.js Analogy | Example Packages |
| :--- | :--- | :--- | :--- |
| **Dependencies** (Normal / Runtime) | **Ghar ke Zaroori Hisse** (Walls, Roof, Doors, Windows). Inke bina ghar exist nahi kar sakta aur rehne yogya nahi hota. | Wo packages jo application ko run (production & live runtime) karne ke liye compulsory hain. | `express`, `mongoose`, `dotenv`, `cors`, `jsonwebtoken` |
| **DevDependencies** (Development-only) | **Nirman ke Auzaar / Tools** (Hammer, Drill machine, Blueprint, Measuring tape). Yeh sirf ghar banate waqt chahiye, ghar banne ke baad nahi. | Wo tools jo sirf developer ko code likhne, test karne ya format karne ke liye chahiye hote hain. Production mein inki zaroorat nahi hoti. | `nodemon`, `eslint`, `prettier`, `jest`, `mocha` |

---

## Part 3: Questions & Answers (Task Submission)

### Q1. What is the role of NPM, package.json, and Nodemon in a Node.js project?
* **NPM (Node Package Manager):** NPM ek package manager aur online registry hai jo 3rd party open-source packages aur libraries ko install, update aur manage karne ka kaam karta hai.
* **package.json:** Yeh project ka configuration file hai jo project metadata, scripts shortcuts (`npm start`), aur project ke sabhi dependencies/devDependencies ke exact list aur versions ko track karta hai.
* **Nodemon:** Yeh ek development tool hai jo project files mein changes ko monitor karta hai aur code save hote hi automatic server restart trigger karta hai.
* **Express.js:** Yeh ek popular web framework hai jo HTTP requests, routes aur middleware handle karne ke liye use hota hai (runtime dependency).

---

### Q2. What are the installation commands for different types of packages?
1. **Initialize a Node.js Project (Create package.json):**
   ```bash
   npm init
   # ya direct defaults ke liye:
   npm init -y
   ```
2. **Install a Normal Runtime Dependency (Dependencies):**
   ```bash
   npm install express
   # Short form:
   npm i express
   ```
   * Yeh `package.json` ke `"dependencies"` section mein add hota hai.

3. **Install a Development Dependency (DevDependencies):**
   ```bash
   npm install nodemon --save-dev
   # Short form:
   npm i nodemon -D
   ```
   * Yeh `package.json` ke `"devDependencies"` section mein add hota hai.

4. **Install all dependencies listed in package.json:**
   ```bash
   npm install
   ```

5. **Start server via NPM script:**
   ```bash
   npm start
   ```

---

### Q3. Explain the difference between Dependencies and DevDependencies with examples.
* **Dependencies (`dependencies`):**
  * **Role:** Application ko runtime par chalane ke liye zaroori hote hain. Production server par bhi deploy hone ke baad app inke bina crash ho jayegi.
  * **Installation Flag:** Default `npm install <package>` ya `npm install <package> --save`.
  * **Example:** `express` (Web server aur API handling ke liye zaroori framework).
* **DevDependencies (`devDependencies`):**
  * **Role:** Sirf local development aur testing environment ke liye use hote hain. Production server par inki zaroorat nahi hoti, isliye production deployment ke samay inko install hone se bachakar server size optimize kiya ja sakta hai (using `npm install --production`).
  * **Installation Flag:** `npm install <package> --save-dev` ya `npm i <package> -D`.
  * **Example:** `nodemon` (Code change par server auto-restart karne ke liye development tool).
