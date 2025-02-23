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
            Login User
          </h1>

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

          {/* register button */}
          <button
            type="submit"
            className=" block w-3/4 py-3 my-3 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
          >
            Login
          </button>
          {/* no account then register */}
          <p className="text-gray-500 text-sm my-2">
            Do not have an account yet?
            <Link to="/register" className="text-blue-700 ">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
