import { ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "../../components/Logo";
import { cn } from "../../utils/cn";
import ThemeSwitch from "./ThemeSwitch";
import LogoutButton from "./LogoutButton";
import { useSidebar } from "./SidebarProvider";
import type React from "react";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
    const { expanded, toggleSwitch } = useSidebar();

    return (
        <aside className=" relative flex flex-col h-screen bg-sid-bar-bg shadow-md">
            <button
                onClick={toggleSwitch}
                className="p-1.5 absolute top-[70%] -right-3 z-100 rounded-full text-primary-text bg-primary shadow-md hover:bg-primary-light flex items-center justify-center transition-transform transform-gpu hover:scale-110">
                {expanded ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
            </button>
            <div className="m-4 my-6 flex justify-center items-center min-w-max">
                <Logo expanded={expanded} />
            </div>

            <nav className="flex-1 mt-5 px-1">
                <ul>{children}</ul>
            </nav>

            <div className={cn("p-2 flex flex-col", expanded ? "items-start" : "items-center")}>
                <LogoutButton />
                <ThemeSwitch />
            </div>
        </aside>
    );
}

export default SidebarLayout;