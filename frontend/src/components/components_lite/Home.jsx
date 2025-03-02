import useGetAllJobs from "@/hooks/useGetAllJobs"
import Categories from "./Categories"
import Footer from "./Footer"
import Header from "./Header"
import LatestJobs from "./LatestJobs"
import Navbar from "./Navbar"
import { useSelector } from "react-redux"

const Home = () => {
  const { loading, error } = useGetAllJobs(); // Trigger data fetch
  const jobs = useSelector((state) => state.jobs.allJobs); // Access Redux state
 

  console.log("Jobs in Component:", { loading, error, jobs });
  return (
    <div>
      <Navbar/>
      <Header/>
     <Categories/>
     {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <LatestJobs jobs={jobs} />}
      <Footer/> 
    </div>
  )
}

export default Home
