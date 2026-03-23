import { Switch } from "radix-ui";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; 
import { useSidebar } from "./SidebarProvider";
import { cn } from "../../utils/cn";

const ThemeSwitch = () => {
    const { expanded } = useSidebar();
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-3 p-2 rounded-md">
            {expanded && (
                <span className="text-sm text-sid-bar-secondary-text overflow-hidden transition-all whitespace-nowrap ">
                    {theme === "light" ? "Light" : "Dark"} Mode
                </span>
            )}

            <Switch.Root
                checked={theme === "light"}
                onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
                className={cn("text-primary h-7 rounded-full bg-slate-200 duration-500  data-[state=checked]:bg-primary",
                    expanded ? "w-14": " w-10" )}>
                <Switch.Thumb className={cn("flex h-6 w-6 items-center justify-center rounded-full bg-container-bg-basic translate-x-0.5 duration-500 will-change-transform",
                     expanded ? "data-[state=checked]:translate-x-[30px]": "data-[state=checked]:translate-x-[14px]" )}>
                    {theme === "light" ?
                        (<Sun className="size-4 fill-primary" />) :
                        (<Moon className="size-4 fill-primary" />)
                    }
                </Switch.Thumb>
            </Switch.Root>
        </div>
    );
};


export default ThemeSwitch;
