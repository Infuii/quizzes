import Navbar from "~/components/Navbar";
import { type NextPage } from "next";
import Hero from "~/components/Hero";
const Home: NextPage = () => {
  //quizoba main page
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
