import Head from "next/head";
import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import { NAME, DESIGNATION } from "../constants/constants";

const Home = () => {
  return (
    <div className="Home-Page -z-10 ">
      <Head>
        <title>{`${NAME} | ${DESIGNATION}`}</title>
        <meta
          name="description"
          content={`Portfolio of ${NAME}, ${DESIGNATION}. Explore projects, skills, and experience in AI automation, Power Platform, and cloud engineering.`}
        />
        <meta property="og:title" content={NAME} />
        <meta property="og:description" content={DESIGNATION} />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <MyExpertise />
      <Footer />
    </div>
  );
};

export default Home;
