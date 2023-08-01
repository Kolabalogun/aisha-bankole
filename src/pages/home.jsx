import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Display from "../components/Home/Display";
import Hero from "../components/Home/Hero";
import RecentWorks from "../components/Home/RecentWorks";
import Services from "../components/Home/Services";
import Loader from "../components/Loader";
import { useGlobalContext } from "../functions/context";

const Home = () => {
  const { projectsFromDBLoader, loading } = useGlobalContext();

  if (projectsFromDBLoader || loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Services />
        <Display />
        <RecentWorks />
        <Contact />
      </div>
    </>
  );
};

export default Home;
