# Pranitham Devarakonda — Systems & Cloud Infrastructure Portfolio

A modern, high-performance, responsive personal portfolio website built for **Pranitham Devarakonda** (IT Systems Engineer & Administrator). Showcases enterprise systems administration, virtualization (Nutanix/VMware), cloud operations (Azure/Linux), backup recovery (Cohesity/TSM/Veeam), automation workflows, technical competencies, projects, and career milestones.

Featuring an interactive 3D Three.js infrastructure mesh background, light/dark theme switcher, smooth transitions, and direct mail integration.

---

## ✨ Features

- **Interactive 3D Three.js Canvas**: Interactive 3D wireframe sphere and constellation particle system representing networked server infrastructure with dynamic cursor tracking.
- **Dual Theme Support (Light & Dark Mode)**: Smooth global theme switching with local storage persistence and tailored color palettes.
- **Comprehensive Sections**:
  - **Hero**: Headline, executive summary, live operational metrics (1,300+ physical hosts, 330+ cloud servers, 100% SLA compliance), resume download, and quick navigation.
  - **About Profile**: Professional bio, profile portrait, and system architecture highlights.
  - **Core Competencies & Specialized Skills**: Categorized technical skills matrix across systems, virtualization, backup storage, networking, automation, and monitoring without arbitrary percentage meters.
  - **Work Experience**: Interactive timeline detailing enterprise administration roles, key responsibilities, and operational achievements.
  - **Key Achievements**: Verified milestones in infrastructure scalability, patch compliance, and process automation.
  - **Featured Projects**: Automation scripts, real-time monitoring systems, and infrastructure tools with links and tech stack badges.
  - **Education & Interests**: Academic background, CGPA, and personal technology pursuits.
  - **Certifications**: Verified credentials across Linux, Python, networking, and security.
  - **Interactive Contact Form**: Direct `mailto:` client trigger with pre-filled subject/body formatting and one-click clipboard copy fallback.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics & Animations**: [Three.js](https://threejs.org/) + [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Georgia (Serif display) + Plus Jakarta Sans (UI body) + JetBrains Mono (Technical badges)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and `npm` installed on your machine.

- [Node.js Download](https://nodejs.org/)

Check your versions:
```bash
node -v
npm -v
```

---

### Installation & Local Setup

1. **Clone or Extract the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   *(Or using `bun install` / `pnpm install` / `yarn`)*

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` (or the port specified in terminal output).

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server on `http://localhost:3000` with instant HMR. |
| `npm run build` | Compiles TypeScript and creates an optimized static production bundle in `dist/`. |
| `npm run preview` | Runs a local web server to preview the production `dist/` build. |
| `npm run lint` | Runs TypeScript compiler checks (`tsc --noEmit`) to validate type safety. |
| `npm run clean` | Removes build artifacts (`dist/`). |

---

## 📁 Project Structure

```text
├── index.html                   # Main HTML entry point
├── metadata.json                # Project configuration metadata
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite bundler & Tailwind configuration
├── src/
│   ├── main.tsx                 # React DOM mount entry
│   ├── App.tsx                  # Root application layout component
│   ├── index.css                # Global CSS rules, theme variables & Tailwind imports
│   ├── types.ts                 # TypeScript interfaces for portfolio data models
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/Light theme state provider & hook
│   ├── data/
│   │   └── portfolioData.ts     # Centralized portfolio data (info, skills, history, projects)
│   └── components/
│       ├── Navbar.tsx           # Fixed navigation header with theme toggle & mobile menu
│       ├── Hero.tsx             # Hero introduction, headline, and metric counters
│       ├── ThreeCanvas.tsx      # Three.js 3D interactive infrastructure background
│       ├── About.tsx            # Personal bio, avatar card, and infrastructure highlights
│       ├── Skills.tsx           # Core competencies and categorized skill matrix
│       ├── Experience.tsx       # Timeline of professional work experience
│       ├── Achievements.tsx     # Key career milestones and deliverables
│       ├── Projects.tsx         # Detailed engineering and automation projects
│       ├── Education.tsx        # Education details and technical interests
│       ├── Certifications.tsx   # Verified credentials and certificates
│       ├── Contact.tsx          # Contact card with mailto client launcher & clipboard tool
│       └── Footer.tsx           # Footer with copyright, back-to-top, and attribution
```

---

## ✏️ Customizing Portfolio Data

All portfolio text, contact info, skills, projects, and work history are centralized in a single file for easy editing:

👉 **`src/data/portfolioData.ts`**

Simply update the exported objects:
- `personalInfo`: Name, role, contact email, phone, location, LinkedIn, GitHub, resume download link.
- `coreCompetencies`: Categorized domain capabilities (Server Admin, Virtualization, Backup, Storage, etc.).
- `skillsData`: List of tools and technologies (RHEL, Windows Server, Azure, Ansible, Nutanix, Cohesity, etc.).
- `experienceData`: Companies, roles, durations, locations, and bullet points.
- `achievementsData`: Career highlights and operational scale metrics.
- `projectsData`: Project title, descriptions, tech tags, and repository links.
- `educationData` & `certificationsData`: Degree, university, certificates, and issuers.

---

## 🌐 Deployment

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Click **Deploy**.

### Deploy to Vercel
1. Import your project into [Vercel](https://vercel.com/).
2. Framework preset will automatically detect **Vite**.
3. Set **Build Command**: `npm run build`
4. Set **Output Directory**: `dist`
5. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base` path matches your repo name if needed:
   ```ts
   export default defineConfig({
     base: '/<repo-name>/',
     // ...
   })
   ```
2. Build static files: `npm run build`
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

- **Name**: Pranitham Devarakonda
- **Email**: [pranitham12374@gmail.com](mailto:pranitham12374@gmail.com)
- **LinkedIn**: [linkedin.com/in/pranitham-devarakonda](https://linkedin.com/in/pranitham-devarakonda)
- **GitHub**: [github.com/pranitham-d](https://github.com/pranitham-d)
