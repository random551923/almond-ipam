import {
  ChevronsRight,
  EllipsisVertical,
  ListFilterPlus,
  Plus,
} from "lucide-react";
import Table from "../components/Table";
import { Button } from "../components/Button";

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
    <div className="flex flex-col h-fill w-fill flex-1 gap-5">
      <div className="flex flex-row">
        <div>
          <Button className="p-2">
            <ListFilterPlus />
          </Button>
        </div>
        <div className="flex flex-1 w-fill justify-end">
          <Button className="gap-1">
            <Plus />
            Create New Subnet
          </Button>
        </div>
      </div>
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
  );
};
export default SubnetPage;
