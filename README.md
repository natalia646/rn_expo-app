# 🎬 Movies App

A mobile app for browsing and searching movies, built with **React Native (Expo)**. Movie data comes from the **TMDB API**, and popular search queries are tracked and displayed as "Trending Movies" using **Appwrite**.

## Features

- 🏠 **Home screen** — a list of the latest (popular) movies plus a trending section based on the most-searched movies
- 🔍 **Search** — search movies via TMDB with a 500ms debounce, results shown in a grid
- 📄 **Movie details** — poster, release year, runtime, rating, vote count, overview, genres, budget, revenue, production companies
- 🔖 **Saved** and **Profile** — screens under development
- 📈 **Trending queries** — every search is recorded in Appwrite; the top 5 most-searched movies are shown on the home screen

## Tech Stack

- [Expo](https://docs.expo.dev/versions/v55.0.0/) / [Expo Router](https://docs.expo.dev/router/introduction/) — file-based routing
- [React Native](https://reactnative.dev/) 0.83 + [React](https://react.dev/) 19
- [NativeWind](https://www.nativewind.dev/) / TailwindCSS — styling
- [TMDB API](https://developer.themoviedb.org/) — movie data
- [Appwrite](https://appwrite.io/) — database for trending search queries
- TypeScript

## Project Structure

```
src/
├── app/
│   ├── (tabs)/          # Tab navigation (Home, Search, Saved, Profile)
│   ├── movies/[id].tsx  # Movie details screen
│   └── _layout.tsx      # Root layout
├── components/          # MovieCard, TrendingCard, MovieInfo, SearchBar, PageLayout, TabIcon
├── lib/                 # Appwrite client
└── global.css

servises/
├── api.ts               # TMDB API requests
├── appwriteDb.ts        # Appwrite database logic (trending queries)
└── useFetch.ts           # Data fetching hook
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DATEBASE_ID=your_appwrite_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

- `EXPO_PUBLIC_MOVIE_API_KEY` — your [TMDB](https://developer.themoviedb.org/) API key
- `EXPO_PUBLIC_APPWRITE_PROJECT_ID` / `EXPO_PUBLIC_APPWRITE_DATEBASE_ID` / `EXPO_PUBLIC_APPWRITE_COLLECTION_ID` — your [Appwrite](https://appwrite.io/) project, database, and collection IDs

### 3. Start the app

```bash
npx expo start
```

From the command output you can choose how to open the app:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- Android emulator (`npm run android`)
- iOS simulator (`npm run ios`)
- [Expo Go](https://expo.dev/go)
- Web (`npm run web`)

## Useful Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run the web version |
| `npm run lint` | Run ESLint |
| `npm run reset-project` | Reset to a blank starter template |

## Data Sources

- Posters and movie details are fetched from `https://image.tmdb.org/t/p/w500` and the [TMDB API](https://developer.themoviedb.org/docs)
- Trending search queries are stored in an Appwrite collection and updated after every successful search
