# 🌐 Personal Portfolio

This is my personal portfolio built with **React**, **TypeScript**, and **Bun** as the runtime. It showcases smooth animations, responsive design, and full internationalization support.

## 🚀 Tech Stack

- **[React 19](https://reactjs.org/)** + **TypeScript** – Modern typed frontend.
- **[Bun](https://bun.sh/)** – Ultra-fast JavaScript runtime.
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS for styling.
- **[GSAP](https://greensock.com/gsap/)** – Powerful and smooth animations.
- **[Framer Motion](https://www.framer.com/motion/)** – Declarative animations for React.
- **[i18next](https://www.i18next.com/)** + **react-i18next** – Multi-language support for English 🇬🇧, Spanish 🇪🇸, and German 🇩🇪.
- **[EmailJS](https://www.emailjs.com/)** – Serverless email handling.
- **[SweetAlert2](https://sweetalert2.github.io/)** – Beautiful, responsive alerts.
- **[React Router v7](https://reactrouter.com/)** – SPA routing.
- **[Lucide React](https://lucide.dev/)** – Customizable SVG icons.
- **[OGL](https://github.com/oframe/ogl)** – Lightweight WebGL rendering.
- **[React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)** – Visibility tracking for scroll-based effects.

---

## 🌍 Internationalization

Fully translated in three languages:

- **English** (`en`)
- **Spanish** (`es`)
- **German** (`de`)

Language is auto-detected or can be manually changed from the UI.

---

## 📁 Project Structure

```
📦 src
 ┣ 📂components     → Reusable UI components
 ┣ 📂pages          → Main page views (Home, About, Projects)
 ┣ 📂hooks          → Custom React hooks (i18n, scroll visibility, etc.)
 ┣ 📂animations     → Centralized GSAP + Framer Motion logic
 ┣ 📂assets         → Images, icons, fonts
 ┣ 📂i18n           → Translation config and language files
 ┣ 📂styles         → Tailwind + custom styles
 ┗ 📜main.tsx       → Main app entry point
```

---

## ✉️ Contact

The contact form uses **EmailJS** to send messages directly from the UI. User feedback is displayed via **SweetAlert2**.

---

## ⚙️ Installation & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

---

## 📦 Build for Production

```bash
bun run build
```

---

## 🧪 Key Features

- Smooth section-based animations.
- Dynamic background with WebGL particles (OGL).
- Responsive and accessible design.
- SPA navigation with React Router.
- Scroll-based interactions using Intersection Observer.
- Theme effects based on scroll (dark/light transitions).

---

## 📄 License

MIT © Your Name

---

## 🌟 Credits

This portfolio blends creativity, clean UI/UX, and modern frontend development techniques to deliver a performant, animated experience.