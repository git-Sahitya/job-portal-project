import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job1 = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border  border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6 " variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://static.vecteezy.com/system/resources/previews/013/061/846/non_2x/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-vector.jpg"></AvatarImage>
          </Avatar>
        </Button>

        <div>
          <h1 className="text-lf font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600"> India</p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
          {job?.salary}LPA
        </Badge>
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
          {job?.location}
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
          {job?.jobType}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button variant="outline" className=" text-[#457fdc] ">
          Save For Later
        </Button>
      </div>
    </div>
  );
};


export default Job1;
