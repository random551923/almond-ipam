import { BookOpenText, Home, Network } from "lucide-react";
import Sidebar from "../features/Sidebar";
import SidebarItem from "../features/Sidebar/SidebarItem";
import { SidebarProvider } from "../features/Sidebar/SidebarProvider";
import { Outlet } from "react-router-dom";



const SidebarLayout = () => {
  return (
    <div className='flex'>
      <SidebarProvider>
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" link="/home" />
          <SidebarItem icon={<Network size={20} />} text="Subnets" link="/subnets" />
          <SidebarItem icon={<BookOpenText size={20} />} text="About" link="/about" />
        </Sidebar>
      </SidebarProvider>
      <main className='flex-1 h-fill h-fill min-h-screen px-12 py-10 app-bg overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;