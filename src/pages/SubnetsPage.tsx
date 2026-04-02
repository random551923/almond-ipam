import {
  ChevronsRight,
  EllipsisVertical,
  ListFilterPlus,
  Plus,
} from "lucide-react";
import Table from "../components/Table";
import { Button } from "../components/Button";
import fakeData from "../../fakeData/fakeData"
import { formatData } from "../utils/dataUtils";
import Tooltip from "../components/Tooltip";

const SubnetPage = () => {
   const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Subnet", accessor: "address" },
    { Header: "Usage", accessor: "allocated_ips_percent" },
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
        data={formatData(fakeData)}
        sort={true}
        className="flex flex-col h-fill flex-1"
        actions={
          <div className="flex flex-row gap-4">
            <EllipsisVertical />
            <button className="relative group inline-block">
              <ChevronsRight />
              <Tooltip text="More..." position="left"/>
            </button>
          </div>
        }
      />
    </div>
  );
};
export default SubnetPage;
