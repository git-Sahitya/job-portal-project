import { Label } from "@radix-ui/react-label";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading } = useSelector((store)=> store.auth)

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.responce ? error.responce.data.message : "An unexpexcted error occurred."
      toast.error(errorMessage)
    }
    finally{
      dispatch(setLoading(false))
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold  text-xl mb-5 text-center text-blue-500 ">
            Login User
          </h1>

          {/* For email */}
          <div className="my-2">
            <Label className="font-semibold">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email..."
            ></Input>
          </div>
          {/* End */}

          {/* For password */}
          <div className="my-2">
            <Label className="font-semibold">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password..."
            ></Input>
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
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
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
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
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
          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-3/4 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-blue-600 hover:bg-blue-800 rounded-md"
            >
              Login
            </button>
          )}

          
          {/* no account then register */}
          <p className="text-gray-500 text-sm my-2 text-center">
            Create new account
            <Link to="/register" className="text-blue-700 ">
              <button
                type="submit"
                className="  w-1/2 py-3 my-3 text-white flex justify-center items-center bg-green-500 max-w-7xl mx-auto hover:bg-green-700 rounded-md"
              >
                Register
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
