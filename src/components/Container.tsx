import type React from "react";
import { cn } from "../utils/cn";

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {

  return (
    <div className={cn("p-8 bg-container-bg-transparent rounded-3xl text-sm shadow-md ", className)}>
      {children}
    </div>
  );
};


const ContainerTitle = ({ className, text }: { className?: string, text: string }) => {

  return (
    <h2 className={cn("text-center text-base font-semibold text-primary-text", className)}>{text}</h2>
  );
};

Container.title = ContainerTitle;

export default Container;