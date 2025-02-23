import { Label } from "@radix-ui/react-label";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold  text-xl mb-5 text-center text-blue-500 ">
            Register User
          </h1>
          {/* For name */}
          <div className="my-2 ">
            <Label className="font-semibold">Name</Label>
            <Input type="text" placeholder="Enter your full name..."></Input>
          </div>
          {/* End */}

          {/* For email */}
          <div className="my-2">
            <Label className="font-semibold">Email</Label>
            <Input type="email" placeholder="Enter your email..."></Input>
          </div>
          {/* End */}

          {/* For password */}
          <div className="my-2">
            <Label className="font-semibold">Password</Label>
            <Input type="password" placeholder="Enter your password..."></Input>
          </div>
          {/* End */}

          {/* For Phone Number */}
          <div className="my-2">
            <Label className="font-semibold">Phone Number</Label>
            <Input type="tel" placeholder="Enter your phone number..."></Input>
          </div>
          {/* End */}

          {/* Role section start here..*/}

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  defaultChecked="checked"
                  className="cursor-pointer"
                />
                <Label className="font-semibold" htmlFor="r1">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="cursor-pointer"
                />
                <Label className="font-semibold" htmlFor="r2">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile photo section start here */}
          <div className="flex items-center gap-2">
            <label className="font-semibold" htmlFor="">
              Profile Photo
            </label>
            <input type="file" accept="image/*" className="cursor-pointer" />
          </div>
          {/* register button */}
          <button
            type="submit"
            className=" block w-full py-3 my-3 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
          >
            Register
          </button>
          {/* already account then login */}
          <p className="text-gray-500 text-center text-sm my-2">
            Already have an account? {" "}
            <Link to="/login" className="text-blue-700  ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
