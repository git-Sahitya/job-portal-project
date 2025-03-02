import { Label } from "@radix-ui/react-label";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

function Register() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.responce
        ? error.responce.data.message
        : "An unexpexcted error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }; 
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold  text-xl mb-5 text-center text-blue-500 ">
            Register User
          </h1>
          {/* For name */}
          <div className="my-2 ">
            <Label className="font-semibold">Fullname</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your full name..."
            ></Input>
          </div>
          {/* End */}

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

          {/* For Phone Number */}
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phone number..."
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
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
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
            <input
              type="file"
              accept="image/*"
              onChange={changeFilehandler}
              className="cursor-pointer"
            />
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
              className=" block w-full py-3 my-3 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
            >
              Register
            </button>
          )}

          {/* already account then login */}
          <p className="text-gray-500 text-center text-sm my-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-semibold ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
