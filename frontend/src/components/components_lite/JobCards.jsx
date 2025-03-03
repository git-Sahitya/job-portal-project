import { Badge } from "../ui/badge";

const JobCards = ({ job }) => {
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className="p-5 rounded-md shadow-xl bg-white  border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3 ">
      <div>
        <h1 className="text-lf font-medium">{job.name}</h1>
        <p className="text-sm text-gray-600"> India</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg my-2">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.description} </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
        {job.position} Open Positions
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
        {job.salary}LPA
        </Badge>
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
        {job.location}
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
        {job.jobType}
        </Badge>
      </div>
    </div>
  );
};


export default JobCards;
