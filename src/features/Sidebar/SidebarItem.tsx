import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { cn } from "../../utils/cn";

export function SidebarItem({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) {
  const { expanded } = useContext(SidebarContext);


  return (
    <li className={cn(
      "relative flex items-center p-4 my-2 gap-3 font-medium cursor-pointer rounded-md transition-all duration-500",
      "text-sid-bar-primary-text hover:bg-sid-bar-haver-bg justify-start",
      {
        "bg-sid-bar-active-bg ": active,
        "border-l-4 border-primary": active && expanded,
        "justify-center gap-0": !expanded,
      })}>

      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>

      <span
        className={cn(
          "overflow-hidden transition-all whitespace-nowrap text-basic",
          expanded ? "w-auto opacity-100" : "w-0 opacity-0"
        )}>
        {text}
      </span>
    </li>
  );
}