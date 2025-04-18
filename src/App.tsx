import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import PokemonCardsPage from './pages/PokemonCardsPage';
import Pokedex from './pages/Pokedex';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, 
        element: <HomePage />
      },
      {
        path: "/pokedex",
        element: <Pokedex />
      },
      {
        path: "/pokemon",
        element: <PokemonPage/>
      },
      {
        path: "/pokemonCards",
        element: <PokemonCardsPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />

}

export default App
