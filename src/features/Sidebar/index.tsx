import { useState } from "react";
import { BookOpenText, ChevronFirst, ChevronLast, Home, Network } from "lucide-react";
import Logo from "../../components/Logo";
import { cn } from "../../utils/cn";
import { SidebarContext } from "./SidebarContext";
import ThemeSwitch from "./ThemeSwitch";
import LogoutButton from "./LogoutButton";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <SidebarContext.Provider value={{ expanded }}>
            <aside className="flex flex-col h-screen bg-sid-bar-bg shadow-md">
                <div className="m-4 my-6 flex justify-center items-center min-w-max">
                    <Logo expanded={expanded} />
                </div>

                <nav className="flex-1 mt-5 px-1">
                    <ul>
                        <SidebarItem icon={<Home size={20} />} text="Home" active />
                        <SidebarItem icon={<Network size={20} />} text="Subnets" />
                        <SidebarItem icon={<BookOpenText size={20} />} text="About" />
                    </ul>
                </nav>

                <div className={cn("p-2 flex flex-col", expanded ? "items-start" : "items-center")}>
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                    <LogoutButton />
                    <ThemeSwitch />
                </div>
            </aside>
        </SidebarContext.Provider>
    );
}

export default Sidebar;