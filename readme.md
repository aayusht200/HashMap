# ⚙️ Webpack + Biome Template

A **modern, minimal Webpack boilerplate** for front-end development — preconfigured with **Biome** for formatting and linting, and ready for **GitHub Pages deployment** using automated npm scripts.

---

## 🧱 Folder Structure

```
project/
├── src/
│   ├── index.js
│   ├── style.css
│   └── template.html
├── dist/
├── webpack.dev.js
├── webpack.prod.js
├── package.json
├── biome.json
└── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Initialize Project

Install all dependencies:

```bash
npm run setup
```

---

### 2️⃣ Start Development Server

```bash
npm start
```

* Runs Webpack Dev Server with live reload.
* Default mode: development with `eval-source-map`.

---

### 3️⃣ Build for Production

```bash
npm run build
```

* Creates an optimized, minified build in `/dist`.

---

### 4️⃣ Lint & Format Code

```bash
npm run lint-format
```

Biome automatically:

* ✅ Auto-sorts imports
* ✅ Enforces linting and code quality
* ✅ Maintains consistent formatting across JS, CSS, and HTML

---

### 5️⃣ Deploy to GitHub Pages

#### 🔹Deployment

```bash
npm run deploy
```
recomended to reset before redeploy
**Workflow:**

1. Creates the `gh-pages` branch if it doesn’t exist.
2. Merges `main` into `gh-pages`.
3. Builds `/dist` and commits it temporarily.
4. Pushes `/dist` subtree to `gh-pages`.
5. Returns to `main` and removes `/dist`.

---

#### 🔹 Reset gh-pages branch

```bash
npm run reset
```
***deletes remote and local gh-pages branch***

---

#### 🔹 Enable GitHub Pages

1. Go to **Settings → Pages** in your GitHub repository.
2. Source: **Deploy from branch**
3. Branch: `gh-pages`, Folder: `/ (root)`
4. Save — your site will be live in a few minutes. 🎉

---

## 🧩 Tech Stack

| Tool                     | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| **Webpack 5**            | Module bundler for modern JS apps            |
| **Biome 2.3.4**          | Fast formatter, linter, and import organizer |
| **HTML Webpack Plugin**  | Generates HTML with bundled scripts          |
| **CSS & Style Loaders**  | Handles CSS imports and injection            |
| **Clean Webpack Plugin** | Cleans `/dist` before each build             |
| **ES Modules**           | Fully ESM-based configuration                |

---

## 🗂️ .gitignore

```
node_modules/
dist/
.DS_Store
package-lock.json
webpack.dev.js
webpack.prod.js
```

---

## 🧰 Notes

* Supports **development** and **production** environments.
* Uses **ESM imports** (`import/export` syntax).
* Automatically cleans `dist/` on each build.
* Biome ensures code consistency and speed in place of Prettier + ESLint.
* **Deployment workflow is fully automated** — first deploy and redeploy handled via npm scripts.
