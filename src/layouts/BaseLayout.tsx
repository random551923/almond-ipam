import type React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = ({children}:{children?: React.ReactNode}) => {
  return (
      <main className='flex-1 min-h-screen flex flex-col px-12 py-9 app-bg overflow-y-auto'>
         {children ? children : <Outlet />}
      </main>
  );
};



export default BaseLayout;
