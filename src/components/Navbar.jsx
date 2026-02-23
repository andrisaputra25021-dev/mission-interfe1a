import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 bg-white border-b border-black/15 z-50 flex items-center justify-between px-20">
      <div className="container-logo">
        <Link to="/">
          <img src={Logo} alt="videobelajar-logo" className="w-full" />
        </Link>
      </div>

      <div className="navlinks flex items-center gap-4 cursor-pointer">
        <a href="#" className="text-black/50">
          Kategori
        </a>
        <Link to="/login" className="px-4 py-2 bg-[#3ecf4c] text-white rounded">
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-white-500 text-[#3ecf4c] rounded border border-[#3ecf4c]"
        >
          Register
        </Link>
      </div>

      <button id="menu" className="hidden">
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
}
export default Navbar;
