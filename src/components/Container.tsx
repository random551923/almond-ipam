import type React from "react";
import { cn } from "../utils/cn";

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    
    return (
        <div className={cn("p-8 bg-container-bg-transparent rounded-3xl text-primary-text text-sm", className)}>
        {children}
    </div>
  );
};

export default Container;