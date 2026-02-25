import BgTextCTA from "../assets/images/backgorund-text-cta.png";

function CTA() {
  return (
    <section className="flex justify-center items-center px-16 py-12">
      <div
        className="w-full rounded-xl p-12 text-white flex flex-col items-center text-center gap-4 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${BgTextCTA})`,
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundBlendMode: "multiply",
        }}
      >
        <p className="px-16 text-base">NEWSLETTER</p>
        <h1 className="text-4xl font-semibold leading-snug">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="px-16 text-base max-w-2xl">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik <strong>videobelajar.id</strong>
        </p>

        <div className="relative w-xl">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="w-full bg-white w-full px-4 py-2 rounded-xl text-black-500 focus:outline-none border"
          ></input>
          <button className="absolute right-1 top-1 bottom-1 text-white bg-[#ffbd3a] px-4 py-1 rounded-lg font-semibold transition hover:bg-[#3ecf4c] hover:scale-105">
            Subcribe
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTA;
