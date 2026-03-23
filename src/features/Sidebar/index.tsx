import { BookOpenText, Home, Network } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import SidebarLayout from "./SidebarLayout";
import { SidebarProvider } from "./SidebarProvider";


const Sidebar = () => {
    return (
        <SidebarProvider>
            <SidebarLayout>
                <SidebarItem icon={<Home size={20} />} text="Home" active />
                <SidebarItem icon={<Network size={20} />} text="Subnets" />
                <SidebarItem icon={<BookOpenText size={20} />} text="About" />
            </SidebarLayout>
        </SidebarProvider>
    );
}

export default Sidebar;