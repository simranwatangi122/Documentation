git status# Full Stack Portfolio (React + NestJS) 🚀

This is the main portfolio project folder containing both the **frontend** (React) and **backend** (NestJS) applications.

---

## 📁 Folder Structure

```text
Documentation/
├── frontend/             # React application (Vite, TypeScript, Tailwind CSS)
│   ├── src/              # Components, sections (Hero, About, Skills, Projects, Contact)
│   ├── package.json
│   └── vite.config.ts
├── backend/              # NestJS REST API application (TypeScript)
│   ├── src/              # Modules (profile, projects, skills, experience, contact)
│   ├── package.json
│   └── nest-cli.json
├── shared/               # Shared TypeScript types between frontend and backend
├── package.json          # Root scripts to run and build both apps
├── .gitignore            # Git ignore rules for node_modules and builds
└── README.md
```

---

## ⚡ How to Run

Open your terminal inside this `Documentation` folder:

```powershell
cd "c:\G Mark\Documentation"
```

### 1. Run Everything (Frontend + Backend)
```powershell
npm run dev
```
- **Frontend (React)**: http://localhost:5173
- **Backend (NestJS API)**: http://localhost:5000/api

---

### 2. Or Run Separately

**Frontend only:**
```powershell
npm run frontend
```

**Backend only:**
```powershell
npm run backend
```

---

## 🔗 Connect to GitHub

To push this `Documentation` folder to your GitHub:

```powershell
# 1. Initialize git inside Documentation
git init

# 2. Stage and commit all files
git add .
git commit -m "feat: complete portfolio with frontend and backend"

# 3. Rename branch to main
git branch -M main

# 4. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git

# 5. Push to GitHub
git push -u origin main
```


