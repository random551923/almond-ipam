import Sidebar from '../features/Sidebar';
import BaseLayout from './BaseLayout';

const AppLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <BaseLayout />
    </div>
  );
};



export default AppLayout;
