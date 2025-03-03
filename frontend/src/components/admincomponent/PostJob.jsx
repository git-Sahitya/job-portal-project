import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const changeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form  className="p-8 max-w-4xl border border-gray-500 shadow-sm hover:shadow-xl
        hover:shadow-red-300 rounded-lg">
          <div className="grid grid-cols-2 gap-5">
            {/* For Title */}
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventhandler}
                placeholder="Enter job title"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Description */}
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="title"
                value={input.description}
                onChange={changeEventhandler}
                placeholder="Enter job description"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/*  */}
            {/* For Requirements */}
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventhandler}
                placeholder="Enter job requirements"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Salary */}
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventhandler}
                placeholder="Enter job salary"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Location */}
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventhandler}
                placeholder="Enter job location"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Job Type */}
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventhandler}
                placeholder="Enter job type"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Experience */}
            <div>
              <Label>Experience</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventhandler}
                placeholder="Enter job experience"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Position */}
            <div>
              <Label>Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventhandler}
                placeholder="Enter number of positions"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
            {/* For Company ID */}
            <div>
              <Label>Company ID</Label>
              <Input
                type="text"
                name="companyId"
                value={input.companyId}
                onChange={changeEventhandler}
                placeholder="Enter company ID"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
              />
            </div>
          </div>
          <Button  className="w-full px-4 py-2 mt-5 text-sm bg-green-500 hover:bg-green-600 text-white  rounded-md"
          >Post Job</Button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
