import type React from "react";
import { cn } from "../utils/cn";

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    
    return (
        <div className={cn("p-8 bg-container-bg-transparent rounded-3xl text-sm shadow-md ", className)}>
        {children}
    </div>
  );
};

export default Container;