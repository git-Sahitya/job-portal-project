import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
    const dispatch =  useDispatch()

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {

        const res = await axios.get(`${JOB_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.status) {
            dispatch(setAllJobs(res.data.jobs))
            console.log(res.data.jobs);
            
        }
        
      } catch (error) {
        console.log( "Fetch Error:",error);
      }
    };
    fetchAllJobs()
  } , [dispatch]);
  return null;
};

export default useGetAllJobs;
