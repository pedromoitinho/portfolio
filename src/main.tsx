import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./main.scss";

// Lazy load the Home component
const Home = lazy(() => import("./pages/home"));

const router = createBrowserRouter([{
  path: "/",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  ),
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
