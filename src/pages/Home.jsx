import Navbar from "../components/Navbar";
import BgTextHero from "../assets/images/background-text-hero.jpg";
import VideoCard from "../components/VideoCard";
import PhotoCard from "../assets/images/background-text-hero.jpg";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const Cards = Array(9).fill({
  title: "Big 4 Auditor Financial Analyst",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est minus omnis saepe suscipit, sed impedit",
  mentor: "Jenna Ortega",
  company: "Gojek",
  price: "Rp 300 K",
  image: PhotoCard,
});

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#fffdf3] min-h-screen">
        <section className="flex justify-center items-center px-16 py-12">
          <div
            className="w-full rounded-xl p-12 text-white flex flex-col items-center text-center gap-4 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${BgTextHero})`,
              backgroundColor: "rgba(0,0,0,0.8)",
              backgroundBlendMode: "multiply",
            }}
          >
            <h1 className="text-5xl font-bold leading-snug">
              Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video
              interaktif!
            </h1>
            <p className="px-16 text-base">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <a
              href="#section-list-video"
              className="bg-[#3ecf4c] text-white font-bold tracking-wide px-4 py-2 rounded-xl"
            >
              Temukan video course untuk dipelajari!
            </a>
          </div>
        </section>

        <section
          id="section-list-video"
          className="flex flex-col justify-center px-16 gap-6"
        >
          <div className="inline-block">
            <h1 className="text-4xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p className="text-base font-medium text-gray-700 pt-4">
              Jelajahi dunia melalui pengetahuan kami!
            </p>
          </div>

          <div className="overflow-auto">
            <ul className="flex gap-8 py-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a className="text-gray-500 font-bold tracking-wide pb-2 border-b-2 border-transparent hover:text-[#f64920] hover:border-[#f64920] transition">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {Cards.map((Card, index) => (
              <VideoCard key={index} {...Card} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
