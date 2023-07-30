import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Display from "../components/Home/Display";
import Hero from "../components/Home/Hero/Hero";
import RecentWorks from "../components/Home/RecentWorks";
import Services from "../components/Home/Services";

const Home = () => {
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
