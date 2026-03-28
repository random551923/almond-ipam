import GuidPieChart from './charts/GuidPieChart';
import Container from './Container';

interface TotalSubnetsProps {
  totalSubnets: number;
}

const TotalSubnets = ({ totalSubnets }: TotalSubnetsProps) => {

   const data = [
        { name: 'totalSubnets', value: totalSubnets, fill: 'var(--color-primary-400)' },
    ];

  return (
    <Container className="flex flex-col w-fit items-center justify-center gap-4">
      <Container.title text="Total Subnets" />

      <GuidPieChart data={data} className="size-32">
          <span className="text-xl font-bold text-primary-text"> {totalSubnets} </span>
          <span className="text-[10px] uppercase text-secondary-text">Used</span>
      </GuidPieChart>
    </Container>
  );
};

export default TotalSubnets;