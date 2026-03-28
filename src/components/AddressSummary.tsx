import { BarChart, Bar, LabelList } from 'recharts';
import Container from './Container';
import { cn } from '../utils/cn';


interface AddressData {
  name: string,
  value: number,
  fill: string,
}

interface AddressSummaryProps {
  data: AddressData[],
  totalAllocatedAddresses: number,
}


const AddressSummary = ({ data, totalAllocatedAddresses }: AddressSummaryProps) => {
  return (
    <Container className="flex flex-col gap-3 w-fit">
      <Container.title text="Address Summery" />
      <AddressBarChart data={data} className='w-48 h-40' />
      <div className="text-primary-text">
        {/* <p className="text-sm ">Total Allocated Addresses: {totalAllocatedAddresses}</p> */}
        <ul className="gap-1 flex flex-col">
          {data.map((ipType) =>
            <li key={ipType.name} className="flex items-center gap-2 text-sm">
              <div className="size-[14px] rounded-[3px]" style={{ backgroundColor: `${ipType.fill}` }} />
              <span className="capitalize">{ipType.name} Addresses</span>
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
};

const AddressBarChart = ({ data, className }: { data: AddressData[], className?: string }) => {
  return (
    <div className={cn('items-center',className)}>
      <BarChart
        width="100%" height="100%" data={data} responsive>
        <Bar dataKey="value" radius={[5, 5, 0, 0]} >
          <LabelList
            dataKey="value" position="insideTop" offset={10}
            style={{ fill: 'var(--color-primary-text)', fontSize: '12px', fontWeight: '500' }}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default AddressSummary;

