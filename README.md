# Recipe Finder (React)

A recipe browsing app built with React and React Router for my CIA-3 frontend assessment.

## Features

- **Recipe cards** with photos and short descriptions
- **Live search** that filters recipes as you type
- **Recipe detail pop-up** showing the full recipe
- **Multi-page navigation** with React Router: Home, Login and Sign-in pages
- **Shared navbar** across every page

## Tech stack

- React 19 and Vite
- React Router
- Component state with `useState`
- Plain CSS

## Project structure

```
cia/src/
├── App.jsx                  routes
├── Componets/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   └── RecipeDetailModel.jsx
└── Pages/
    ├── Home.jsx             recipe list, search and detail pop-up
    ├── Login.jsx
    └── Signin.jsx
```

## Run it

```bash
cd cia
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).
