import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { RiHomeOfficeFill } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <div className=" text-center mt-10">
        <div className=" flex  flex-col gap-5 my-10">
         <h2 className="px-4 flex py-2 mx-auto rounded-full bg-gray-200 text-[#FA4F09] font-medium">
          <RiHomeOfficeFill  className="mt-[5px] mr-2 text-[#614232]"/>
           <span> No.1 Job Hunt Website</span>
          </h2>
          <h2 className="text-5xl font-bold">
            Search,Apply & <br />
            Get Your <span className="text-[#6A38C2]">Dream Job</span>
          </h2>
          <p>
            Start your hunt for the best, life-changing career opportunities
            from here in your <br />
            selected areas conveniently and get hired quickly.
          </p>
          <div className="flex w-[40%] shadow-lg border-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find your dream Jobs"
              className="outline-none  border-none w-full"
            />
            <Button className="rounded-r-full  "> 
            <Search className="h-5 w-5 "/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
