import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function Register() {
  return (
    <>
      <nav className="fixed top-0 w-full h-20 bg-white border-b border-black/15 z-50 flex items-center justify-between px-20 z-1000">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-full" />
          </Link>
        </div>

        <button id="menu" className="hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      <section>
        <form action="">
          <div className="form-title">
            <h1>Pendaftaran Akun</h1>
            <p>Yuk, daftarkan akunmu sekarang juga!</p>
          </div>
          <div className="form-input">
            <label htmlFor="name">
              Nama Lengkap<span>*</span>
            </label>
            <input type="text" name="name" id="name" required="" />
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input type="email" name="email" id="email" required="" />
            <label htmlFor="phone">
              No. HP<span>*</span>
            </label>
            <div className="country-phone">
              <div className="country-code">
                <img src="assets/flag-id.png" alt="ID" />
                <span>+62</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <input type="tel" name="phone" id="phone" required="" />
            </div>
            <label htmlFor="password">
              Kata Sandi<span>*</span>
            </label>
            <div className="password-field">
              <input type="password" id="password" name="password" />
              <i className="fa-solid fa-eye" />
            </div>
            <label htmlFor="password">
              konfirmasi Kata Sandi<span>*</span>
            </label>
            <div className="password-field">
              <input type="password" id="password" name="password" />
              <i className="fa-solid fa-eye" />
            </div>
            <a href="#" className="forget-password">
              Lupa Password?
            </a>
            <div className="register-login-button">
              <button id="button-sign-up">Daftar</button>
              <button id="button-login">Masuk</button>
              <p>atau</p>
              <button id="button-sso-google">
                <div className="google-icon">
                  <img src="assets/logos_google-icon.png" alt="google-icon" />
                </div>
                <span>Daftar dengan Google</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
