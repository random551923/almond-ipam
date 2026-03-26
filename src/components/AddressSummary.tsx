import { BarChart, Bar, ResponsiveContainer, Rectangle, type BarShapeProps, LabelList } from 'recharts';
import Container from './Container';


interface AddressData {
  type: string,
  value: number,
}

interface AddressSummaryProps {
  data: AddressData[],
  totalAllocatedAddresses: number,
}


const AddressSummary = ({ data, totalAllocatedAddresses }: AddressSummaryProps) => {
  return (
    <Container className="flex flex-col gap-3 w-fit">
      <Container.title text="Address Summery" />
      <AddressBarChart data={data} />
      <div className="text-primary-text">
        {/* <p className="text-sm ">Total Allocated Addresses: {totalAllocatedAddresses}</p> */}
        <ul className="gap-2 flex flex-row">
          {data.map((ipType) =>
            <li key={ipType.type} className="flex items-center gap-2 text-sm">
              <div className="size-[14px] rounded-[3px]" style={{ backgroundColor: `var(--color-address-${ipType.type})` }} />
              <span className="capitalize">{ipType.type}</span>
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
};

const AddressBarChart = ({ data }: { data: AddressData[] }) => {
  return (
    <BarChart
      style={{ width: '100%', height: '50%' }}
      responsive
      data={data}>
      <Bar dataKey="value" radius={[5, 5, 0, 0]} shape={BarShape}>
        <LabelList
          dataKey="value" position="insideTop" offset={10}
          style={{ fill: 'var(--color-primary-text)', fontSize: '12px', fontWeight: '500' }}
        />
      </Bar>
    </BarChart>
  );
};

const BarShape = (props: BarShapeProps) => {
  return <Rectangle key={`cell-${props.index}`} {...props} fill={`var(--color-address-${props.payload.type})`} />
};

export default AddressSummary;

