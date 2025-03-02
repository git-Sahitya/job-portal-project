import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage
                src="https://static.vecteezy.com/system/resources/previews/013/061/846/non_2x/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-vector.jpg"
                alt="company logo"
              />
            </Avatar>
          </TableCell>
          <TableCell>Google</TableCell>
          <TableCell>02-02-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
                <PopoverTrigger>
                    <MoreHorizontal/>
                </PopoverTrigger>
              <PopoverContent className="w-22 h-12">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
