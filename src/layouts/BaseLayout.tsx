import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
      <main className='flex-1 h-fill h-fill min-h-screen px-12 py-10 app-bg overflow-y-auto'>
        <Outlet />
      </main>
  );
};



export default BaseLayout;
