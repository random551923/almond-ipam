import data from "../../fakeData/staticData";
import fakeData from "../../fakeData/fakeData"
import AddressAvailability from "../components/AddressAvailability";
import AddressSummary from "../components/AddressSummary";
import Table from "../components/Table";
import TotalsPieChart from "../components/TotalsPieChart";

const HomePage = () => {
  const totalFreeAddresses = 3;
  const totalAllocatedAddresses = 13;

  const columns = [
    { Header: "NAME", accessor: "name" },
    { Header: "SUBNET", accessor: "subnet" },
    { Header: "USAGE", accessor: "allocated_ips_precent" },
  ];

  const tableData = [
    { subnet: "200.100.0.0/16", name: "John Doe", allocated_ips_precent: 22 },
    { subnet: "100.100.0.0/16", name: "Jane Smith", allocated_ips_precent: 45 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 71 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 81 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", allocated_ips_precent : 91 },
  ];



  return (
    <div className="flex flex-row h-fill w-fill flex-1 gap-10">
      <div className="flex flex-col h-fill w-fit gap-2 justify-center gap-16">
        <div className="w-full h-fit flex flex-row justify-around gap-2">
          <TotalsPieChart number={4} subTitle="Subnets" />
          <TotalsPieChart number={221} subTitle="Addresses" />
        </div>
        <div className=" w-fit flex flex-row gap-4">
          <AddressSummary
            data={data}
            totalAllocatedAddresses={totalAllocatedAddresses}
          />
          <AddressAvailability
            totalFreeAddresses={totalFreeAddresses}
            totalAllocatedAddresses={totalAllocatedAddresses}
          />
        </div>
      </div>
      <div className=" flex flex-col w-fill flex-1 justify-center p-4">
        <h1 className="text-xl font-bold mb-4 text-center text-primary-text">
          Top 10 Subnets By Usage
        </h1>
        <Table columns={columns} data={tableData} className="" />
      </div>
    </div>
  );
};

export default HomePage;
