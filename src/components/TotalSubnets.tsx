import GuidPieChart from './charts/GuidPieChart';
import Container from './Container';

interface TotalSubnetsProps {
  totalSubnets: number;
}

const TotalSubnets = ({ totalSubnets }: TotalSubnetsProps) => {

   const data = [
        { name: 'totalSubnets', value: totalSubnets, fill: 'var(--color-container-bg-basic)' },
    ];

  return (
    
      <GuidPieChart data={data} className="size-52">
          <span className="text-xl font-bold text-primary-text"> {totalSubnets} </span>
          <span className="text-[10px] uppercase text-secondary-text">Subnets</span>
      </GuidPieChart>
   
  );
};

export default TotalSubnets;