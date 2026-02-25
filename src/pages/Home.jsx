import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#fffdf3] min-h-screen">
        <Intro />
        <VideoList />
      </main>
    </>
  );
}

export default Home;
