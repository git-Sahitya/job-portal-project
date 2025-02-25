import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border  border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div>
        <h1 className="text-lf font-medium">Company Name</h1>
        <p className="text-sm text-gray-600"> India</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg my-2">Job Title</h2>
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
    </div>
  );
};

export default JobCards;
