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
        <aside className="flex flex-col h-screen bg-sid-bar-bg shadow-md">
            <div className="m-4 my-6 flex justify-center items-center min-w-max">
                <Logo expanded={expanded} />
            </div>

            <nav className="flex-1 mt-5 px-1">
                <ul>{children}</ul>
            </nav>

            <div className={cn("p-2 flex flex-col", expanded ? "items-start" : "items-center")}>
                <button
                    onClick={toggleSwitch}
                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                    {expanded ? <ChevronLeft /> : <ChevronRight />}
                </button>
                <LogoutButton />
                <ThemeSwitch />
            </div>
        </aside>
    );
}

export default SidebarLayout;