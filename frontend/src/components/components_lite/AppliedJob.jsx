import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const AppliedJob = () => {
  return (
    <div>
      <Table>
        <TableCaption>Recent Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1,2,3,4,5,6,7].map((item, index)=>(
              <TableRow key={index}>   
              <TableCell>26-02-2025</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>Microsoft</TableCell>
              <TableCell className="text-right "><Badge className="bg-zinc-600 hover:bg-[#76cde3] cursor-pointer">Selected</Badge></TableCell>

              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJob;
