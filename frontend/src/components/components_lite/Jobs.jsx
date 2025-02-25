import FilterCard from "./FilterCard";
import Job1 from "./Job1";
import Navbar from "./Navbar";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="  max-w-7xl mx-auto mt-5 ">
        <div className="flex gap-5 ">
          <div className="w-20%">
            <FilterCard />
          </div>
          {jobsArray.length <= 0 ? (
            <span className="">Job not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
              {jobsArray.map(() => (
                <Job1 key={""} />
              ))}
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
