# HaqShanasi (حق شناسی) — AI Legal Rights Companion for Pakistani Women

🌐 **Live Application:** [https://haqshanasi.vercel.app/](https://haqshanasi.vercel.app/)

> **HaqShanasi** (*Self-Knowledge of Rights*) is an AI-powered legal literacy platform and digital companion crafted to empower Pakistani women with clear, actionable, and dignified access to their constitutional, statutory, and Islamic rights.

---

## 📖 Overview & Mission

In Pakistan, procedural complexity, legal jargon, and societal taboos often prevent women from understanding and claiming their fundamental rights—such as delegating the right of divorce in their Nikahnama (**Column 18**), asserting statutory inheritance shares, filing workplace harassment complaints, or seeking court protection orders against domestic abuse.

**HaqShanasi** bridges this gap by providing an empathetic, intelligent legal companion that communicates in plain **English** and **Urdu** (اردو), citing authentic statutory acts, court precedents, step-by-step enforcement guides, and immediate 24/7 emergency helplines.

---

## ✨ Key Features

### 1. 🤖 Interactive AI Legal Companion
- **Google Gemini Integration**: Powered by `@google/genai` (utilizing `gemini-3.6-flash`), customized with a system instruction acting as a knowledgeable, empathetic older sister.
- **Bilingual Conversations**: Understands and responds seamlessly in both English and Urdu (اردو) scripts.
- **Context-Aware Statutory Guidance**: Covers Nikahnama clauses, Khula court procedures, inheritance calculation, workplace harassment complaints, child custody (*Hizanat*), and emergency shelter access.
- **Safe Fallback Engine**: Provides built-in offline legal literacy and helpline guidance if API keys or connectivity are unavailable.

### 2. 🏛️ Statutory Rights Library
Comprehensive, plain-language reference articles citing authentic Pakistani legislation:
- **Muslim Family Laws Ordinance 1961 (MFLO)**: Nikahnama Columns 18–22, *Talaq-e-Tafweez*, Prompt vs. Deferred *Mahr*, monthly maintenance.
- **Dissolution of Muslim Marriages Act 1939 & Family Courts Act 1964**: Procedure for seeking *Khula* in Family Court without requiring husband's consent.
- **Inheritance & Land Rights (PPC Section 498A & 2020 Property Rights Act)**: Quranic fixed shares and criminal penalties (up to 10 years imprisonment) for deceiving or forcing a woman to relinquish inheritance.
- **Protection Against Harassment of Women at the Workplace Act 2010 (2022 Amendment)**: Standing 3-member Inquiry Committees and direct appeals to the Ombudsperson (FPOAH).
- **Domestic Violence & Protection Acts**: Court-issued Protection Orders, Residence Orders, and access to state-managed *Darul Aman* shelter homes.

### 3. 🚨 Verified Emergency & Legal Aid Directory
- **24/7 Helplines**: Direct access to Ministry of Human Rights (**1099**), Edhi Emergency Rescue (**115**), Digital Rights Foundation Cyber Harassment Helpline (**0800-39393**), and Umang Mental Health Helpline (**0311 7786264**).
- **Pro-Bono Legal Aid Organisations**: Verified contacts for AGHS Legal Aid Cell (Asma Jahangir Cell), Legal Aid Society (LAS Sindh), Shirkat Gah, and Aurat Foundation.
- **Safe Shelter Homes**: State-funded *Darul Aman* shelter network across 36+ districts and NGO sanctuaries (e.g., Panah Shelter Home Karachi).

### 4. 🛡️ User Safety & Privacy
- **Quick Safety Exit**: Instant panic button in the top bar to redirect the browser to Google immediately if the user needs to hide their screen.
- **Anonymous & Local-First**: No user sign-up or tracking required; respects user privacy and confidentiality.

---

## 🎨 Design & Aesthetic Theme

HaqShanasi adheres strictly to an editorial **"Bold Typography"** magazine theme:
- **Typography**: Paired display serif typography (*Playfair Display* / *Georgia*) with *Source Sans Pro* body copy and *Noto Nastaliq Urdu* font support.
- **Color Palette**:
  - **Terracotta** (`#B85C38`): Primary accent symbolising strength and dignity.
  - **Sage** (`#6B7F59`): Secondary accent representing growth and peace.
  - **Cream Paper** (`#F5F0E8`): Warm, eye-safe background.
  - **Charcoal** (`#1A1A1A`): High-contrast editorial text and sharp borders.
- **Asymmetric Grid Layouts**: Magazine-style structural panels, numbered statutory indices, and high-impact typographic headers.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Lucide Icons (`lucide-react`)
- **Backend / API**: Node.js, Express, `tsx` server
- **AI SDK**: `@google/genai` (Google GenAI TypeScript SDK)
- **Production Bundling**: `esbuild` for CommonJS server compilation (`dist/server.cjs`)

---

## 📁 Project Structure

```
├── .env.example            # Environment variables template (GEMINI_API_KEY)
├── metadata.json           # Application metadata and capabilities
├── package.json            # Node dependencies and build scripts
├── server.ts               # Express backend API proxy & Vite middleware server
├── index.html              # Entry HTML with custom Google Fonts (Playfair, Noto Nastaliq Urdu)
├── src/
│   ├── main.tsx            # React application mounting point
│   ├── App.tsx             # Root container with main page routing state
│   ├── index.css           # Global Tailwind CSS and editorial custom styling rules
│   ├── types.ts            # Global TypeScript interfaces & data models
│   ├── data/
│   │   ├── legalData.ts    # Statutory rights categories, laws, and detailed articles
│   │   └── resourcesData.ts # Helpline directory, legal aid orgs, and Darul Aman shelters
│   └── components/
│       ├── Navbar.tsx      # Header navigation bar with Quick Safety Exit
│       ├── Footer.tsx      # Editorial footer with helpline callouts & legal disclaimer
│       ├── HomeView.tsx    # Asymmetric editorial landing view
│       ├── ChatView.tsx    # Interactive AI legal companion interface
│       ├── LibraryView.tsx # Filterable statutory rights articles & myth-busting guides
│       ├── ResourcesView.tsx # Emergency helplines, legal aid, and shelter directory
│       └── AboutView.tsx   # Mission statement, etymology, and formal legal disclaimers
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Quick Start & Development

### Prerequisites
- **Node.js**: v18 or higher installed
- **npm** or **yarn**

### 1. Installation
Clone the repository and ensure dependencies are installed:
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file at the root based on `.env.example`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
*Note: If no API key is provided, the application will automatically enter an Offline Fallback Guidance Mode to ensure users still receive critical legal literacy.*

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Production Build & Execution
```bash
# Build frontend with Vite and bundle backend server with esbuild
npm run build

# Launch compiled CommonJS server
npm start
```

---

## ⚖️ Legal Disclaimer

> **HaqShanasi** is an educational public legal literacy platform built to inform Pakistani women about statutory laws, court precedents, and human rights frameworks. The AI companion and reference guides provide general legal literacy and do **NOT** constitute formal attorney-client representation or binding legal counsel. For active legal disputes, court filings, or emergency police intervention, please contact a licensed Advocate or reach out to our listed pro-bono legal aid partners (such as AGHS Legal Aid Cell or Legal Aid Society) and emergency helplines (**1099** / **115**).

---

## 💚 Acknowledgments & Dedication

Dedicated to human rights advocates, legal aid workers, and women across Pakistan striving for dignity, equality, and justice under the law.
