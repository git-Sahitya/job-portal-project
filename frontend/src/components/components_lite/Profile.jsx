import { Contact, Mail, Pen } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "mySQL",
  "git",
  "Github",
  "Tailwind CSS",
];
const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div
        className="max-w-4xl  mx-auto bg-white border border-gray-200 rounded-2xl  my-5 p-8
      shadow shadow-gray-400 hover:shadow-red-400"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer w-24 h-24">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/166967863?v=4"
                alt="@shadcn"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                suscipit at minus mollitia vel nemo voluptates nobis! Ratione
                sit reiciendis voluptates ab unde mollitia incidunt illum earum,
                quia numquam repellat.
              </p>
            </div>
          </div>
          <Button className="text-right " variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className=" flex items-center gap-3 my-2">
            <Mail />
            <span className="">Sahi@gmail.com</span>
          </div>
          <div className=" flex items-center gap-3 my-2">
            <Contact />
            <span className="">+919876543210</span>
          </div>
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-semibold ">Skills</h1>
            <div className="flex items-center  gap-1 my-1">
              {skills.length !== 0 ? (
                skills.map((item, index) => (
                  <Badge
                    className="bg-zinc-600 hover:bg-[#32c686] cursor-pointer hover:"
                    key={index}
                  >
                    {item}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center  gap-1.5">
            <label className="font-semibold "> Resume</label>
            <div>
              {isResume ? (
                <a
                  target="_blank"
                  href={"http://github.com/git-Sahitya"}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Download
                </a>
              ) : (
                <span>No Resume Found</span>
              )}
            </div>
          </div>
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className=" text-lg  my-5 font-semibold">Applied Jobs</h1>
          {/* Application Table */}
          <AppliedJob/>
        </div>
    </div>
  );
};

export default Profile;
