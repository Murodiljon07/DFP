import "../index.css";
import "../assets/styles/navbar.css";

/* components  */
import SearchInput from "../components/searchInput";
import CardBtn from "../components/CardBTN";
import Profile from "../components/GoProfile";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="../../index.html" className="logo">
          <img src="./src/assets/pictures/Logo.png" alt="" />
        </a>
        <div className="nav-bar">
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                Dairy
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Eggs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Poultry
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Rice
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Beef/Mutton
              </a>
            </li>
            <li>
              <a href="#" className="nav-link active">
                More
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <CardBtn
              text="0"
              onclick={() => alert("Hozircha bu bolim mavjud emas!")}
            ></CardBtn>
            <SearchInput></SearchInput>
            <Profile></Profile>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
