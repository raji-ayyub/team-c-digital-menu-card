# 🍽️ Digital Menu Card

A **Next.js**-powered web application that allows restaurants to manage and display their menu via **QR code scanning**. This project is built using **TypeScript**, **Tailwind CSS**, and follows modern web development best practices.

---

## Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **State Management**: Context API (or alternative)
- **Styling**: Tailwind CSS, CSS Modules (if needed)
- **Authentication**: TBD (Firebase/Auth0/NextAuth.js)
- **Deployment**: Vercel

---



## Project Structure

menu-card/
│── src/
│   ├── app/
│   │   ├── page.tsx  → Homepage
│   │   ├── menu/  
│   │   │   ├── [id]/  → Dynamic menu page for scanned restaurant
│   │   │   │   ├── page.tsx  → Loads menu dynamically via scanned QR code
│   │   ├── dashboard/ → Admin dashboard for restaurant owners
│   │   ├── auth/
│   │   │   ├── login.tsx
│   │   │   ├── signup.tsx
│   │   ├── generate-qr.tsx  → Page where restaurants create QR codes
│   │   ├── scan-qr.tsx  → Page for scanning QR codes
│   ├── components/
│   │   ├── ui/  
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── QRScanner.tsx  → Component for scanning QR codes
│   ├── services/
│   │   ├── qrService.ts  → Handles QR code generation & scanning
│   │   ├── menuService.ts  → Fetches menu data after scanning
│   ├── utils/
│   │   ├── qrUtils.ts  → Helper functions for QR code handling
│   ├── lib/
│   │   ├── api.ts  
│── README.md
│── next.config.js
│── tailwind.config.js
│── tsconfig.json

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

