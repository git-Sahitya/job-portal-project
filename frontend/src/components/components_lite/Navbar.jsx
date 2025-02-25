import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl  font-bold">
            <span className="text-[#6B3AC2]">Job</span>{" "}
            <span className="text-[#FA4F09]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/Browse"}>Browse</Link>
            <Link to={"/Jobs"}>Jobs</Link>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2 ">
              <Link to={"/login"}>
                <Button
                  variant="outline"
                  className="bg-[#6B3AC2] hover:bg-[#472386] hover:text-white text-white"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-[#FA4F09] hover:bg-red-700">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className="cursor-pointer w-8  rounded-full "
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 ">
                <div className="flex items-center gap-4 ">
                  <Avatar>
                    <AvatarImage
                      className="cursor-pointer w-16 rounded-full "
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium">Sahitya Singh</h1>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <div className="flex w-fit my-2 items-center gap-2 cursor-pointer">
                    <User2></User2>
                    <Button variant="link">Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
