import { ChevronsRight, EllipsisVertical } from "lucide-react";
import Table from "../components/Table";

const SubnetPage = () => {
  const columns = [
    { Header: "NAME", accessor: "name" },
    { Header: "SUBNET", accessor: "subnet" },
    { Header: "USAGE", accessor: "usage" },
  ];

  const tableData = [
    { subnet: "200.100.0.0/16", name: "John Doe", usage: 22 },
    { subnet: "100.100.0.0/16", name: "Jane Smith", usage: 45 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 71 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 81 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
    { subnet: "300.100.0.0/16", name: "Mike Johnson", usage: 91 },
  ];

  return (
    <div className="flex flex-row h-fill w-fill flex-1 overflow-hidden gap-10">
      <div className=" flex flex-col w-fill h-fill flex-1 justify-center p-4">
        <h1 className="text-xl font-bold mb-4 text-center text-primary-text"></h1>
        <Table
          columns={columns}
          data={tableData}
          sort={true}
          className="flex flex-col h-fill flex-1"
          actions={
            <div className="flex flex-row gap-4">
              <EllipsisVertical />
              <button>
              <ChevronsRight />
            </button>
            </div>
          }
        />
      </div>
    </div>
  );
};
export default SubnetPage;
