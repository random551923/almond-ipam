import { ChevronsUpDown } from "lucide-react";
import { cn } from "../utils/cn";
import UsageBar from "./UsageBar";

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[]
  data: any[],
  className?: string,
  sort?: boolean,
  actions?: React.ReactNode,
}

const Table = ({ columns, data, className, sort, actions }: TableProps) => {
  return (
    <div className={cn("overflow-x-auto bg-container-bg-transparent rounded-lg min-h-96", className)}>
      <table className="w-full text-primary-text">
        <thead className="bg-[#F4F4F5] rounded-lg">
          <tr>
            {columns.map((column) => (
              <TableHeder key={column.accessor} >
                {column.Header}
                {sort && <ChevronsUpDown size={16} />}
              </TableHeder>
            ))}
            {actions && (<TableHeder key="actions"></TableHeder>)}
          </tr>
        </thead>
        <tbody className="py-4">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <TableItem key={column.accessor}>
                  {column.Header === "Usage" ?
                    (<UsageBar usagePercentage={row[column.accessor]} />) :
                    (row[column.accessor])}
                </TableItem>
              ))}
              {actions && (
                <TableItem key="actions" className="w-px ">{actions}</TableItem>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

const TableItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <td className={cn("py-3 px-4 border-b border-gray-300 w-fit max-w-40 ", className)}>
      {children}
    </td>
  );
};

const TableHeder = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <th className={cn("py-3 px-4 text-left", className)}>
      <div className="flex flex-row items-center gap-2 uppercase">
        {children}
      </div>
    </th>
  );
};

export default Table;
