import JobCards from "./JobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold  text-[#FA4F09]">
        {" "}
        <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
      </h2>
      {/* Job Cards */}

      <div className="grid grid-cols-3  gap-4 my-5">
        {randomJobs.slice(0,6).map((job, index) => (
          <JobCards key={index}></JobCards>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
