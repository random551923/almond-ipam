import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { cn } from "../utils/cn";
import UsageBar from "./UsageBar";

interface TableProps {
  columns: any;
  data: any;
  className: string;
  sort?: boolean;
}

const Table = ({ columns, data, className, sort }: TableProps) => {
  return (
    <div
      className={cn(
        "overflow-x-auto bg-container-bg-transparent rounded-lg",
        className,
      )}
    >
      <table className="w-full text-primary-text">
        <thead className="bg-gray-100 rounded-lg">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-3 px-4 border-b border-gray-200 text-left"
              >
                <div className="flex flex-row items-center gap-2">
                  {column.Header}
                  {sort && <ChevronsUpDown />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="py-4">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-3 px-4 border-t border-gray-300"
                >
                  {column.accessor == "usage" ? (
                    <UsageBar usagePercentage={row[column.accessor]} />
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
