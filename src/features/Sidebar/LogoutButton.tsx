import { LogOut } from "lucide-react";
import { cn } from "../../utils/cn";
import { useSidebar } from "./SidebarProvider";

const LogoutButton = () => {
    const { expanded } = useSidebar();
    return (
        <button className="flex p-2 rounded-md items-center justify-center text-sid-bar-secondary-text hover:bg-sid-bar-haver-bg">
            
            <span className={cn("overflow-hidden  transition-all whitespace-nowrap text-sm",
                    expanded ? "w-auto opacity-100 mr-3" : "w-0 opacity-0")}>
                Logout
            </span>

            <LogOut size={15} />

        </button>
    );
};
export default LogoutButton;