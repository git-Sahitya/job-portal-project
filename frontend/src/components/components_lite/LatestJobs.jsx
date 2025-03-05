import { useSelector } from "react-redux";
import JobCards from "./JobCards";
import { useNavigate } from "react-router-dom";


const LatestJobs = () => {
  
  const {allJobs} = useSelector((store) => store.jobs); // Safely access allJobs
  console.log(allJobs);
  
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold  text-[#FA4F09]">
        
        <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
      </h2>
      {/* Job Cards */}

      <div className="grid grid-cols-3  gap-4 my-5">
      {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
                <JobCards  key={job._id} job={job}></JobCards>
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              )
            )
        )
        }
      </div>
    </div>
  );
};

export default LatestJobs;
