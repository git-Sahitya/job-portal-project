import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Job1 = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border  border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">3 days ago</p>
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
          <h1 className="text-lf font-medium">Company Name</h1>
          <p className="text-sm text-gray-600"> India</p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est soluta
          blanditiis distinctio ipsum quam, nesciunt ea quasi illum laudantium
          sapiente dolorem. Debitis ipsa voluptatibus atque ipsum inventore
          dolorum numquam. Dignissimos?
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
          10 position
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
          20LPA
        </Badge>
        <Badge className={"text-[#6B3AC2] font-bold "} variant={"ghost"}>
          Remote position
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold "} variant={"ghost"}>
          Full-Time
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
        >
          Details
        </Button>
        <Button
          variant="outline"
          className=" text-[#457fdc] "
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;
