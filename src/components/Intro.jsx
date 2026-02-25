import BgTextHero from "../assets/images/background-text-hero.jpg";

function Intro() {
  return (
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
  );
}
export default Intro;
