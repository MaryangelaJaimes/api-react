import silueta from "../../assets/silueta.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="banner d-flex justify-content-center mb-5">
      <img className="banner-silhouette" src={silueta} />
    </header>
  );
};

export default Header;
