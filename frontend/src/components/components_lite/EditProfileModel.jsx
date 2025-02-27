import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const EditProfileModel = ({open , setOpen}) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    name: user?.fullname, 
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.name);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);

      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        //dispatch(setUser(res.data.user));
        dispatch(setUser({ ...res.data.user, skills: input.skills }));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input);
  };

  const FileChangehandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[500px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          {/* Form for Editing profile */}
          <form onSubmit={handleFileChange}>
            <div className=" grid gap-4 py-4 ">
              {/* For Name */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="name" className="text-right">
                  Name
                </Label>

                <input
                  type="text"
                  id="name"
                  value={input.name}
                  name="name"
                  onChange={changeEventHandler}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}

              {/* For Email */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="email" className="text-right">
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}
              {/* For Phone number */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="phone" className="text-right">
                  Phone
                </Label>
                <input
                  type="tel"
                  id="phone"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}
              {/* For Bio */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="bio" className="text-right">
                  Bio
                </Label>
                <input
                  type="bio"
                  id="bio"
                  name="bio"
                  onChange={changeEventHandler}
                  value={input.bio}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}
              {/* For skills */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  type="text"
                  id="skills"
                  value={input.skills}
                  name="skills"
                  onChange={changeEventHandler}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}
              {/* For Resume */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmLFor="file" className="text-right">
                  Resume
                </Label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={FileChangehandler}
                  className=" col-span-3 border border-gray-300  rounded-md p-2"
                />
              </div>
              {/* end */}
            </div>
            <DialogFooter>
              {loading ? (
                <div className="flex items-center justify-center my-10">
                  <div className="spinner-border text-blue-600" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-3/4 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-blue-500 hover:bg-blue-800 rounded-md"
                >
                  Save
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfileModel;
