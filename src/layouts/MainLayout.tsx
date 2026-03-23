import Sidebar from '../features/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='w-full h-screen px-12 py-10 main-bg'>
        <Outlet />
      </main>
    </div>
  );
}



export default App
