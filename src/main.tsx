import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./main.scss";

// Lazy load components with prefetch
const Home = lazy(() => import("./pages/home"));
const Certificado = lazy(() => import("./pages/certificado"));

// Prefetch component after initial load
const prefetchComponent = () => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/src/pages/home.tsx';
    link.href = '/src/pages/certificado.tsx';
    document.head.appendChild(link);
};

// Add prefetch on idle
window.requestIdleCallback?.(() => prefetchComponent());

const router = createBrowserRouter([{
    path: "/",
    element: (
        <Suspense fallback={<div>Loading...</div>}>
            <Home />
        </Suspense>
    ),
    },
    {
    path:"/certificado",
    element:(
        <Suspense fallback={<div>Loading...</div>}>
            <Certificado/>
        </Suspense>
    )
    }
    
    ])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
