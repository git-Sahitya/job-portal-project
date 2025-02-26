import { Badge } from "./badge";
import { Button } from "./button";

const Description = () => {
  const isApplied = true;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
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
          <div>
            <Button
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-800"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
        <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className=" font-semibold  my-1 ">
            Role:
            <span className="pl-4 font-normal text-gray-800">
              Software Engineer
            </span>
          </h1>
          <h1 className=" font-semibold  my-1 ">
            Location:
            <span className="pl-4 font-normal text-gray-800"> Remote </span>
          </h1>
          <h1 className=" font-semibold  my-1 ">
            Salary:
            <span className="pl-4 font-normal text-gray-800"> $10,0000 - $20,0000 </span>
          </h1>
          <h1 className=" font-semibold  my-1 ">
            Experience:
            <span className="pl-4 font-normal text-gray-800"> 7+ years </span>
          </h1>
          <h1 className=" font-semibold  my-1 ">
            Job Type:
            <span className="pl-4 font-normal text-gray-800"> Full-Time </span>
          </h1>
          <h1 className=" font-semibold  my-1 ">
            Total Applicants:
            <span className="pl-4 font-normal text-gray-800"> 40 </span>
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default Description;
