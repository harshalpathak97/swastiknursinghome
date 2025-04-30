import Banner from "../components/Banner";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import Topdoctors from "../components/Topdoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <Speciality />
      <Topdoctors />
      <Banner />
    </div>
  );
};

export default Home;
