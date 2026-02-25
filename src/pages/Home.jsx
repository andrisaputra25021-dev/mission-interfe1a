import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#fffdf3] min-h-screen">
        <Intro />
        <VideoList />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default Home;
