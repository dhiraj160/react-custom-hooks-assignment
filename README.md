# React Custom Hook Assignment

## Project Overview

This project is my submission for the React Custom Hooks assignment. The goal was to create a reusable custom hook called `useFetch` that fetches data from an API and handles loading and error states. I used the JSONPlaceholder Photos API to display photos and their titles in a responsive grid.

## What I Learned

### Custom Hooks
While working on this assignment, I learned how custom hooks help separate logic from UI components. Instead of writing the fetch logic inside `App.jsx`, I moved it into `useFetch`, which made the code easier to read and reuse.

### useEffect
One thing I learned was that `useEffect` itself cannot be asynchronous. Instead, I created an async function inside `useEffect` and called it to fetch the data.

### Working with APIs
I learned how to:
- Fetch data using the Fetch API
- Handle loading and error states
- Display the fetched data using the `map()` function

### Tailwind CSS
I used Tailwind CSS to build the photo grid and make the layout responsive without writing much custom CSS.

---

## Project Structure

- **src/hooks/useFetch.js** – Contains the custom `useFetch` hook.
- **src/components/PhotoCard.jsx** – Displays each photo and its title.
- **src/App.jsx** – Uses the custom hook and renders the photo gallery.
- **src/index.css** – Global styles and Tailwind setup.

---

## Challenges

The JSONPlaceholder API returns 5000 photos. Rendering all of them at once affected the page performance, so I displayed only the first 48 photos using `slice(0, 48)`.

I also had to make sure the loading state was updated correctly after the API request finished, whether it succeeded or failed.

---

## How to Run

1. Clone the repository.

```bash
git clone https://github.com/dhiraj160/react-custom-hooks-assignment.git
```

2. Install the dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## API Used

JSONPlaceholder Photos API

```
https://jsonplaceholder.typicode.com/photos
```

---

## GitHub Repository

https://github.com/dhiraj160/react-custom-hooks-assignment