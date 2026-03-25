
import { cn } from "../utils/cn";

// Extend the input element's interface to include custom props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type?: string;
    label: string;
}

const Input = ({ name, label, type = 'text', className , ...props }: InputProps) => {
 

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm text-secondary-text">{label}</label>
            <input
                type={type} id={name} {...props} 
                className={cn("w-full px-3 py-2 border text-form-primary-text rounded-md shadow-sm focus:outline-none focus:border-primary", className,)}
            />
            {/* {error && (
                <div className='mt-2 text-sm text-status-error'>
                    {error.message}
                </div>
            )} */}
        </div>
    );
};

export default Input;

