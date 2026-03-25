
import { forwardRef } from "react";
import { cn } from "../utils/cn";

// Extend the input element's interface to include custom props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: string;
    error?: string; 
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, type = "text", ...props }, ref) => {

        
        return (
            <div className="flex flex-col gap-1">
                <label className="text-sm text-secondary-text">{label}</label>
                <input type={type} ref={ref}  {...props}
                    className={cn("w-full px-3 py-2 border text-form-primary-text rounded-md shadow-sm focus:outline-none focus:border-primary", className,
                        error ? "border-status-error" : ""
                    )}
                />
                {error && <span className="text-sm text-status-error">{error}</span>}
            </div>
        );
    }
);

export default Input;

