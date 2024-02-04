import ReactDOM from 'react-dom/client';
import App from "@/App";
import React, {Suspense} from 'react';
import '@/index.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<div>loading...</div>}><About/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<div>loading...</div>}><Shop/></Suspense>
            }
        ],
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);