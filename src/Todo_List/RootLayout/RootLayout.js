import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavBar';

function RootLayout(){
  
  return (
    <div className='root'>
        {/*Navigation Bar*/}
      <NavigationBar />

      {/*Content*/}
      <Outlet />
    </div>
  )
}

export default RootLayout;