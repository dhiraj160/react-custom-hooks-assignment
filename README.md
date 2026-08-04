# React Custom Hook Assignment - `useFetch`

A clean, modular React application demonstrating a custom hook (`useFetch`) for fetching API data, handling loading & error states, and rendering photo/product items in a responsive grid layout.

## 📌 Problem Statement
Create a reusable custom hook in React (`useFetch`) that simplifies fetching data from any backend API, handles loading and error states appropriately, and consumes it in a React component with clean styling.

---

## 🛠️ Features & Requirements Checklist

- [x] **Custom Hook Name**: `useFetch` located in `src/hooks/useFetch.js`
- [x] **URL Parameter**: Accepts `url` endpoint dynamically
- [x] **Return Values**:
  - `data`: The fetched payload data
  - `loading`: Boolean state indicating loading progress
  - `error`: Error message string if the fetch encounters network or HTTP errors
- [x] **React Hooks Utilized**: `useState`, `useEffect`, and `useCallback`
- [x] **Error & Loading Handling**: Complete try-catch-finally block with status check (`response.ok`)
- [x] **Component Integration**: Consumed in `App.jsx` and rendered via `PhotoCard.jsx`
- [x] **Multi-API Flexible**: Works with JSONPlaceholder, Platzi Escuelajs (`https://api.escuelajs.co/api/v1/products`), etc.
- [x] **Styling**: Tailwind CSS + custom SVG color placeholder palette with grid layout.

---

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   └── PhotoCard.jsx       # Card component for individual items
│   ├── hooks/
│   │   └── useFetch.js         # Custom useFetch hook
│   ├── App.jsx                 # Main consumer component
│   ├── index.css               # Base Tailwind CSS rules
│   └── main.jsx                # App root mounting
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production (Netlify deployment)**:
   ```bash
   npm run build
   ```

---

## 🌐 Netlify Deployment Guide

1. Push this repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click **Add new site** > **Import an existing project** > Choose **GitHub**.
4. Select your repository.
5. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**.
