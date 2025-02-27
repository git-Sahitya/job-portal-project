import { Contact, Mail, Pen } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import { useState } from "react";
import EditProfileModel from "./EditProfileModel";
import { useSelector } from "react-redux";


const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
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
               //  src={user?.profile?.profilePhoto}
                alt="@shadcn"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right "
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className=" flex items-center gap-3 my-2">
            <Mail />
            <span className="">
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </span>
          </div>
          <div className=" flex items-center gap-3 my-2">
            <Contact />
            <span className="">
              <a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a>
            </span>
          </div>
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-semibold ">Skills</h1>
            <div className="flex items-center  gap-1 my-1">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
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
                  href={
                    user?.profile?.resume
                    ? user?.profile?.resume
                    : "https://github.com/git-Sahitya"
                  }
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
        <AppliedJob />
      </div>
      {/* Edit profile Model */}
      <EditProfileModel open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
