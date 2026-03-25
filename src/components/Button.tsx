import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils/cn";

// Extend the button element's interface to include props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'form';
    asChild?: boolean;
}

export const Button = ({className, variant = 'primary',  asChild = false, ...props}: ButtonProps) => {

    const Comp = asChild ? Slot : "button";
    const buttonStyle = {
        primary: "bg-container-bg-basic text-primary",
        secondary: "border-2 border-container-bg-basic bg-transparent text-container-bg-basic",
        form: "bg-primary text-primary-text",
    };

    return (
        <Comp
            className={cn("px-6 py-2.5 rounded-md whitespace-nowrap text-sm font-medium transition-transform hover:scale-105 text-center flex items-center justify-center"
                , buttonStyle[variant], className)}
            {...props}
        />
    );
};