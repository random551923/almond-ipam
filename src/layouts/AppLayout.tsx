import Sidebar from '../features/Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='w-full h-screen px-12 py-10 app-bg'>
        <Outlet />
      </main>
    </div>
  );
};



export default AppLayout;
