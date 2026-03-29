import { ChevronsUpDown } from "lucide-react";
import { cn } from "../utils/cn";
import UsageBar from "./UsageBar";
import { Children } from "react";

interface TableProps {
  columns: any;
  data: any;
  className: string;
  sort?: boolean;
  actions?: React.ReactNode;
}

const Table = ({ columns, data, className, sort, actions,}: TableProps) => {
  return (
    <div
      className={cn(
        "overflow-x-auto bg-container-bg-transparent rounded-lg",
        className,
      )}>
      <table className="w-full text-primary-text">
        <thead className="bg-[#F4F4F5] rounded-lg">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="py-3 px-4 text-left">
                <div className="flex flex-row items-center gap-2">
                  {column.Header}
                  {sort && <ChevronsUpDown />}
                </div>
              </th>
            ))}
            {actions && (<th key="actions" className="py-3 px-4 text-left">ACTIONS</th>)}
          </tr>
        </thead>
        <tbody className="py-4">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((column) => (
                <TableItem key={column.accessor}>
                {column.accessor == "usage" ? (<UsageBar usagePercentage={row[column.accessor]} />) : (row[column.accessor])}
              </TableItem>))}
              {actions && <TableItem key={"actions"}> {actions}</TableItem>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableItem = ({key, children}:{key: string, children: React.ReactNode}) => {
  return (
    <td key={key} className="flex-col py-3 px-4 border-b border-gray-300 w-fit">
      {children}
    </td>
  );
};

export default Table;
