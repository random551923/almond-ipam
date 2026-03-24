import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
      <main className='flex-1 min-h-screen flex flex-col px-12 py-10 app-bg overflow-y-auto'>
        <Outlet />
      </main>
  );
};



export default BaseLayout;
