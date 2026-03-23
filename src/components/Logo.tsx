import { cn } from "../utils/cn";


export default function Logo({ expanded }: { expanded?: boolean; }) {
    return (
        <div className="flex flex-row items-center whitespace-nowrap overflow-hidden ">
            <LogoIcon size={40} />
            <div className={cn("flex flex-col font-logo transition-all duration-500 ease-in-out overflow-hidden",
                expanded ? " w-auto opacity-100 ml-2 " : "max-w-0 opacity-0")} >
                <span className="text-[23px] leading-none">ALMOND</span>
                <span className="text-[13px] leading-none ">IP MANAGEMENT</span>
            </div>
        </div>
    );
}


export const LogoIcon = ({ size }: { size: number }) => (
    <img
        src={'/src/assets/almond-icon.png'}
        style={{ width: size, height: size }}
    />
);



export const LogoFull = () => (
    <div className='flex flex-row items-center font-logo h-fit w-fit'>
        <LogoIcon size={40} />
        <span className='text-4xl'>Almond IPAM</span>
    </div>
);
