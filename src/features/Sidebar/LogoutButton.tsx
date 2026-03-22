import { LogOut } from "lucide-react";
import { cn } from "../../utils/cn";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

const LogoutButton = () => {
    const { expanded } = useContext(SidebarContext);
    return (
        <button className="flex p-2 rounded-md items-center gap-3 text-sid-bar-secondary-text hover:bg-sid-bar-haver-bg">
            
            <span className={cn("overflow-hidden transition-all whitespace-nowrap text-sm",
                    expanded ? "w-auto opacity-100" : "w-0 opacity-0")}>
                Logout
            </span>

            <LogOut size={15} className="flex items-center justify-center" />

        </button>
    );
};
export default LogoutButton;