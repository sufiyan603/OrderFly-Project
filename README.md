# Vite React TypeScript Dashboard

This is a **Vite + React + TypeScript** project that builds a **User & Posts Dashboard**. The dashboard fetches users and their posts from an API, allowing filtering, sorting, and searching functionalities.

## Features
- 📌 **User List**: Displays users from an API.
- 📌 **User Posts**: Click a user to see their posts.
- 🔍 **Search Bar**: Filter users dynamically.
- 🔽 **Sorting**: Sort users based on selected criteria.
- 📜 **Pagination**: View posts in paginated form.
- 🎨 **Styled with Tailwind CSS**.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **pnpm/yarn/npm** installed.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/vite-react-typescript-starter.git
cd vite-react-typescript-starter
```

### 2️⃣ Install Dependencies
Using **pnpm** (recommended):
```sh
pnpm install
```
Or using **yarn**:
```sh
yarn install
```
Or using **npm**:
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
pnpm dev
```
Or
```sh
yarn dev
```
Or
```sh
npm run dev
```
The app will be available at: **http://localhost:5173**

## Build for Production
```sh
pnpm build
```
Or
```sh
yarn build
```
Or
```sh
npm run build
```

## Preview Production Build
```sh
pnpm preview
```
Or
```sh
yarn preview
```
Or
```sh
npm run preview
```

## Technologies Used
- **React** + **TypeScript**
- **Vite** (Fast build tool)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **ESLint** (Code linting)

## Folder Structure
```
├── src
│   ├── components   # Reusable components
│   ├── pages        # Page components
│   ├── hooks        # Custom React hooks
│   ├── api          # API request logic
│   ├── styles       # Tailwind and global styles
│   └── main.tsx     # App entry point
├── public           # Static assets
├── package.json     # Dependencies & scripts
├── vite.config.ts   # Vite configuration
└── README.md        # Project documentation
```
