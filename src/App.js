import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Todo_List/RootLayout/RootLayout';
import TodosList from './Todo_List/Today_todosList/todosList';
import Analytics from './Todo_List/Analytics/Analytics';

function App() {

  // create browser router function
  const router= createBrowserRouter([
    {
    path:'/',
    element:<RootLayout />,
    children:[
    {
      path:'/',
      element:<TodosList />
    },
    {
      path:'/analytics',
      element:<Analytics />
    }
  ]
}
]);
  
  return(
  <div className='app'>
    <RouterProvider router={router} />
    </div>
  )
}

export default App;