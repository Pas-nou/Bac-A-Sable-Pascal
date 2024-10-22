import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./services/connexion.ts";

// import connexion from './services/connexion.ts'
import App from './App.tsx';
import Detail from './pages/Detail.tsx';
// import Card from './components/Card.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/detail/:id',
    element: <App />,
    // loader : async ({ params }) => {
    //   const repos = await connexion.get(`/repos/${params.id}`);
    //   console.log('Loader', repos);
    //   return repos.data;
    // }
  },
  {
    path: '/administrateur/detail/:id',
    element: <Detail />,
    // loader : async ({ params }) => {
    //   const repos = await connexion.get(`/repos/${params.id}`);
    //   console.log('Loader', repos);
    //   return repos.data;
    // }
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
