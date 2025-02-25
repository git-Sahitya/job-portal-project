import Categories from "./Categories"
import Footer from "./Footer"
import Header from "./Header"
import LatestJobs from "./LatestJobs"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
     <Categories/>
      <LatestJobs/>
      <Footer/> 
    </div>
  )
}

export default Home
