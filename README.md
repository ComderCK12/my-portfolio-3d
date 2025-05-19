# 🚀 Personal Portfolio Website

This is a sleek and interactive **Personal Portfolio Website** built using modern web technologies like **React**, **Next.js**, **Tailwind CSS**, **Three.js**, **GSAP**, and **EmailJS**. The goal is to create a responsive and animated portfolio to showcase your work, skills, and contact information in a professional and engaging way.

## 🌐 Live Demo

👉 [View Live Portfolio](-)

---

## 📸 Preview

![Portfolio Preview](-)

---

## 🛠️ Tech Stack & Explanations

### ✅ [React](https://reactjs.org/)

React is a JavaScript library for building user interfaces. It allows for the creation of reusable UI components and enables fast, efficient updates to the DOM.

### ✅ [Next.js](https://nextjs.org/)

Next.js is a powerful React framework that supports server-side rendering (SSR) and static site generation (SSG). It simplifies routing, improves performance, and helps with SEO.

### ✅ [Tailwind CSS](https://tailwindcss.com/)

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs quickly and responsively. It supports mobile-first design and is highly customizable.

### ✅ [Three.js](https://threejs.org/)

Three.js is a JavaScript library used to create and display animated 3D graphics in the browser using WebGL. It enables immersive 3D elements like models, backgrounds, and effects in your site.

### ✅ [GSAP (GreenSock Animation Platform)](https://gsap.com/)

GSAP is a high-performance animation library used for creating complex timelines and scroll-triggered animations. It offers smooth transitions and precise control over animations.

### ✅ [EmailJS](https://www.emailjs.com/)

EmailJS enables sending emails directly from the frontend without needing a backend. It's great for contact forms or subscription features in static applications.

---

## ✨ Features

- ⚡ Fully responsive and mobile-friendly layout
- 🎮 Engaging 3D visuals using Three.js
- 🎨 Smooth scroll and section animations via GSAP
- 📬 Contact form integration with real-time email delivery via EmailJS
- 🖼️ Project portfolio showcase
- 🌙 Optional dark mode support

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

```bash
git clone https://github.com/ComderCK12/my-portfolio-3d
cd your-portfolio
npm install
# or
yarn install
```

### Running program

```bash
npm run dev
# or
yarn dev
```

Visit on localhost:5173 on your browser to see the app

## 🔧 EmailJS Configuration — Full Setup

To enable the contact form to send emails without a backend, this project uses [EmailJS](https://www.emailjs.com/).

### ✅ 1. Create an Account

- Visit [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

---

### ✅ 2. Add an Email Service

- Go to the **Dashboard**
- Click on **Email Services**
- Connect your email provider (e.g., Gmail)
- Copy your **Service ID** (e.g., `service_abc123`)

---

### ✅ 3. Create an Email Template

- Navigate to **Email Templates**
- Click **"Create New Template"**
- Add fields such as:
  - `from_name`
  - `from_email`
  - `message`
- Save the template and copy the **Template ID** (e.g., `template_xyz456`)

---

### ✅ 4. Get Your Public Key

- Go to **Account > API Keys**
- Copy your **Public Key** (previously known as `user_id`)

---

### ✅ 5. Add Environment Variables

Create a `.env.local` file in your project root and add the following:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### ✅ 5. Install EmailJS SDK

Create a `.env.local` file in your project root and add the following:

```bash
npm install @emailjs/browser
# or
yarn add @emailjs/browser
```

---

## 🧑‍💻 Author

**Your Name**  
Frontend Developer & UI Enthusiast  
📫 [chiragkathoyeck@gmail.com](mailto:chiragkathoyeck@gmail.com)  
🌐 [Portfolio Website](-)  
🐙 [GitHub](https://github.com/ComderCK12)  
🔗 [LinkedIn](https://www.linkedin.com/in/chirag-kathoye-1a3794230/)

---

## ⭐️ Support

If you find this project useful or inspiring, consider giving it a ⭐️ on [GitHub](https://github.com/ComderCK12/my-portfolio-3d)!  
You can also share feedback, suggest features, or open an issue to contribute.

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software with proper attribution.

> See the [LICENSE](LICENSE) file for full license details.
