import { cn } from "../utils/cn";


export default function Logo  ({ expanded }: { expanded?: boolean; })  {
    return (
    <div className="flex flex-row items-center font-logo gap-2 h-fit w-fit whitespace-nowrap overflow-hidden ">
        <LogoIcon />
        <div className={cn("flex flex-col font-logo transition-all duration-500 ease-in-out overflow-hidden",
            expanded ? "max-w-xs opacity-100 " : "max-w-0 opacity-0")} >
            <span className="text-[23px] leading-none">ALMOND</span>
            <span className="text-[13px] leading-none ">IP MANAGEMENT</span>
        </div>
    </div>
); }


export const LogoIcon = () => (
    <img
        src={'/src/assets/almond-icon.png'}
        className='w-[40px] h-[40px]'
    />
);



export const LogoFull = () => (
    <div className='flex flex-row items-center font-logo h-fit w-fit'>
        <LogoIcon />
        <span className='text-4xl'>Almond IPAM</span>
    </div>
);
