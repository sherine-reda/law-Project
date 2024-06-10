import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { langContext } from "../../Context/LangContext";
function Navbar() {
  // const [Lang, setLang] = useState("Ar")
  const { Lang, setLang } = useContext(langContext);

  function changeLang(e) {
    console.log(e.target.getAttribute("data-lang"));
    setLang(e.target.getAttribute("data-lang"));
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top ">
        <div className="container flex-row-reverse ">
          <Link className="navbar-brand w-25   text-end" to="#">
            <img
              src={logo}
              className="w-100  "
              alt="شركه النواب للمحاماة و الاستشارات القانونيه"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  flex-row-reverse justify-content-between w-75 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  {Lang == "Ar" ? "الاتفاقيات" : "Agreements"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  {Lang == "Ar" ? "من نحن" : "About"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  {Lang == "Ar" ? "تواصل معنا" : "Contact Us"}{" "}
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {Lang == "Ar" ? "العربية" : "English"}
                </Link>
                <ul className="dropdown-menu">
                  {Lang == "Ar" ? (
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-lang="En"
                        onClick={(e) => changeLang(e)}
                      >
                        الانجليزية
                      </Link>
                    </li>
                  ) : (
                    <li><Link className="dropdown-item" to="#" data-lang="Ar" onClick={(e)=>changeLang(e)} > Arabic</Link></li> 
                  )}
                  {/* <li><Link className="dropdown-item" to="#" data-lang={Lang=="Ar"?"Ar":"En"} onClick={(e)=>changeLang(e)} > {Lang=="Ar"?"الانجليزية":"Arabic"}</Link></li>  */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
