
import data from "../../fakeData/staticData";
import AddressAvailability from "../components/AddressAvailability";
import AddressSummary from "../components/AddressSummary";
import SubnetSummary from "../components/TotalSubnets";

const HomePage = () => {
  const totalFreeAddresses = 2;
  const totalAllocatedAddresses = 13;

  return (
    <div className="flex flex-col flex-wrap items-start content-start gap-6 flex-1 overflow-hidden">
      <SubnetSummary totalSubnets={4} />
      <SubnetSummary totalSubnets={4} />
      <AddressSummary data={data} totalAllocatedAddresses={totalAllocatedAddresses} />
      <AddressAvailability totalFreeAddresses={totalFreeAddresses} totalAllocatedAddresses={totalAllocatedAddresses} />
      
    </div>
  );
};



export default HomePage;