import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <VideoList />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
