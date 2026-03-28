
import data from "../../fakeData/staticData";
import AddressAvailability from "../components/AddressAvailability";
import AddressSummary from "../components/AddressSummary";
import SubnetSummary from "../components/TotalSubnets";

const HomePage = () => {
  const totalFreeAddresses = 2;
  const totalAllocatedAddresses = 13;

  return (
    <div className="flex flex-col h-fill w-fit overflow-hidden gap-2 justify-around">
      <div className="w-full h-fit flex flex-row justify-around gap-2">
        <SubnetSummary totalSubnets={4} />
        <SubnetSummary totalSubnets={221} />
      </div>
      <div className=" w-fit flex flex-row gap-2">
        <AddressSummary data={data} totalAllocatedAddresses={totalAllocatedAddresses} />
        <AddressAvailability totalFreeAddresses={totalFreeAddresses} totalAllocatedAddresses={totalAllocatedAddresses} />
      </div>
    </div>
  );
};



export default HomePage;