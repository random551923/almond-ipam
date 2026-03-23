import { cn } from "../../utils/cn";
import { useSidebar } from "./SidebarProvider";

export function SidebarItem({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) {
  const { expanded } = useSidebar();


  return (
    <li className={cn(
      "relative flex items-center border-primary p-4 my-2 text-md cursor-pointer rounded-md transition-all duration-500 text-sid-bar-primary-text hover:bg-sid-bar-haver-bg justify-start",
      {
        "bg-sid-bar-active-bg ": active,
        "border-l-4 ": active && expanded,
        "gap-0 justify-center ": !expanded,
        "gap-3 justify-start ": expanded
      })}>

      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>

      <span
        className={cn(
          "overflow-hidden whitespace-nowrap text-basic",
          expanded ? "w-auto opacity-100" : "w-0 opacity-0"
        )}>
        {text}
      </span>
    </li>
  );
}