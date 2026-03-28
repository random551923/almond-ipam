import type React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = ({children}:{children?: React.ReactNode}) => {
  return (
      <main className='flex-1 h-screen flex flex-col px-12 py-9 app-bg'>
         {children ? children : <Outlet />}
      </main>
  );
};



export default BaseLayout;
