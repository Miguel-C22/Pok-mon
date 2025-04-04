import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

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
        path: "/pokemon",
        element: <PokemonPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />

}

export default App
