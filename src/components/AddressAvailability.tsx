import GuidPieChart from './charts/GuidPieChart';
import Container from './Container';


const AddressAvailability = ({
    totalFreeAddresses,
    totalAllocatedAddresses,

}) => {
    const total = totalAllocatedAddresses + totalFreeAddresses;
    const utilization = total > 0 ? Math.round((totalAllocatedAddresses / total) * 100) : 0;

    const data = [
        { name: 'allocated', value: totalAllocatedAddresses, fill: 'var(--color-address-allocated)' },
        { name: 'remaining', value: totalFreeAddresses, fill: 'var(--color-address-remaining)' },
    ];

    return (
        <Container className="flex flex-col gap-4 items-center w-fit">
            <Container.title text="Address Availability" />

            <GuidPieChart data={data} className="size-40">
                <span className="text-xl font-bold text-primary-text">
                    {utilization}%
                </span>
                <span className="text-[10px] uppercase text-secondary-text">Used</span>
            </GuidPieChart>

            <div className="text-primary-text mt-auto">
                <ul className="flex flex-1 flex-row justify-between gap-5">
                    {data.map((ipType) =>
                        <li key={ipType.name} >
                            <div className="flex items-center gap-2 text-sm">
                                <div className="size-[14px] rounded-[3px]" style={{ backgroundColor: `${ipType.fill}` }} />
                                <span className="capitalize text-lg">{ipType.value}</span>
                            </div>
                            <span className="capitalize text-xs">{ipType.name} </span>
                        </li>
                    )}
                </ul>
            </div>

        </Container >
    );
};

export default AddressAvailability;