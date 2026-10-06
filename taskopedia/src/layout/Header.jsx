import logo from "../images/react.png";

const Header = () => {
  return (
    <div className="p-2 pt-3 text-center">
      <img src={logo} style={{ width: "30px" }}></img>
      <span className="text-success" style={{ textAlign: "center" }}>
        Welcome To The React Course
      </span>
      <hr />
    </div>
  );
};

export default Header;
