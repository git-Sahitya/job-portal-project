import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Varanasi",
      "Lucknow",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "MERN",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "DSA",
      "Javascript",
      "Frontend",
      "Backend",
      "Mobile",
      "Desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{data.filterType}</h2>
            {data.array.map((item,) => (
                <div  className="flex items-center space-x-2 my-2" key={item.id}>
                  <RadioGroupItem value={item}> </RadioGroupItem>
                <label>{item}</label>
                </div>
              
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
