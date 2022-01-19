import { FcGlobe } from "react-icons/fc";

const Header = () => {
  return (
    <header className="header">
      <FcGlobe className="globe--logo" />
      <p className="blog-name">my travel journal</p>
    </header>
  );
};

export default Header;
