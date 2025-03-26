# 🍽️ Digital Menu Card

A **Next.js**-powered web application that allows restaurants to manage and display their menu via **QR code scanning**. This project is built using **TypeScript**, **Tailwind CSS**, and follows modern web development best practices.

---

## 🚀 Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **State Management**: Context API (or alternative)
- **Styling**: Tailwind CSS, CSS Modules (if needed)
- **Authentication**: TBD (Firebase/Auth0/NextAuth.js)
- **Deployment**: Vercel, Netlify, or Railway

---



## 📂 Project Structure

📂 src/
├── 📂 app/ (Main app logic)
│ ├── 📂 (auth)/ (Login/Signup pages if needed)
│ ├── 📂 dashboard/ (User dashboard if applicable)
│ ├── 📂 menu/ (Menu-related pages)
│ ├── 📂 api/ (If using backend APIs inside Next.js)
│ ├── 📜 layout.tsx (Root layout)
│ ├── 📜 page.tsx (Home page)
│ ├── 📜 globals.css (Global styles)
│
├── 📂 components/ (Reusable components)
│ ├── 📜 Navbar.tsx
│ ├── 📜 Button.tsx
│ ├── 📜 Input.tsx
│
├── 📂 styles/ (CSS or Tailwind configs)
│ ├── 📜 globals.css
│
├── 📂 lib/ (Utility functions, API calls)
│
📜 tailwind.config.ts
📜 postcss.config.js
📜 tsconfig.json



---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/raji-ayyub/digital-menu-card-team-c.git
cd menu-card



---

### **2️⃣ Install Dependencies**
```sh
pnpm install


---

### **3️⃣ Run the Development Server**
```sh
pnpm run dev

Server runs at: http://localhost:3000



---

👥 Branching Strategy
main → Stable & production-ready code

dev → Active development branch

Feature branches:

feature/auth

feature/menu

feature/dashboard




---


Use the following workflow for contributions:


git checkout dev
git pull origin dev
git checkout -b feature/your-feature
# Make changes & commit
git push origin feature/your-feature
# Open a pull request to dev branch





---

📌 Contribution Guidelines
✔️ Follow the project folder structure
✔️ Write clean, modular, and reusable code
✔️ Use TypeScript and Tailwind best practices
✔️ Always create a new branch for features
✔️ Submit Pull Requests (PRs) for review

