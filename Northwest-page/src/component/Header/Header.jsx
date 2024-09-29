import { useState } from "react";
import Logo from "../Images/northwest_petroleum_logo.png";
import { navData } from "../../assets/Data/navData";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import HomeSubNav from "../Home/HomeSubNav";
import AboutSubNav from "../HomeAbout/AboutSubNav";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  const showToggle = () => {
    setToggle(!toggle);
  };

  const subNavComponent = (id) => {
    switch (id) {
      case "home":
        return <HomeSubNav />;

      case 2:
        return <AboutSubNav />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="p-0 m-0 box-border">
        <div className=" h-[30px] bg-[#0B6A42] text-white">
          <marquee direction="">
            <div className=" flex justify-evenly font-Urbanist text-md">
              <span>Northwest! More Than You Expect</span>{" "}
              <span>Northwest! More Than You Expect</span>
              <span>Northwest! More Than You Expect</span>
            </div>
          </marquee>
        </div>
      </div>
      <div className="m-0 sticky top-0 z-30 bg-white overflow-visible">
        <div className="relative w-[92%] mx-auto p-3 flex justify-between items-center">
          <div className=" w-[50px] lg:w-[80px] z-50">
            <img src={Logo} alt="" className="w-full" />
          </div>
          <nav className=" hidden lg:flex items-center space-x-8 list-none  font-medium font-Inter">
            {navData?.map((item) => {
              return (
                <ul className="relative" key={item.id}>
                  <li
                    className="nav-link relative"
                    onMouseEnter={() => setHoverId(item.id)}
                    onMouseLeave={() => setHoverId(null)}
                  >
                    {hoverId === item.id && item.hasSubNav && (
                      <div className="fixed z-40 top-[95px] h-[30vh] w-[90%] left-[65px] bg-white shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                        {subNavComponent(item.id)}
                      </div>
                    )}
                    <a href={item.path}>{item.title}</a>
                  </li>
                </ul>
              );
            })}
          </nav>
          <div className="absolute cursor-pointer top-4 right-4">
            <AiOutlineMenu
              className="lg:hidden text-3xl hover:text-[#0B6A42]"
              onClick={showToggle}
            />
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="lg:hidden fixed w-screen h-screen top-7 left-0 bg-white translate-x-0 duration-[950ms] z-50">
          <div className="absolute top-4 right-6">
            <ImCancelCircle
              onClick={showToggle}
              className="text-4xl text-[#0B6A41] cursor-pointer"
            />
          </div>
          <div className="m-10 text-white w-1/2" onClick={showToggle}>
            {navData?.map((item) => {
              return (
                <ul
                  className="font-Poppins font-medium text-black hover:text-green-600 p-4 cursor-pointer text-xl hover:text-2xl"
                  key={item.id}
                >
                  <Link to={item.path}>
                    <li>{item.title}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="lg:hidden fixed w-screen h-screen top-7 left-0 bg-white translate-x-full duration-[950ms] z-20">
          <div className="absolute top-4 right-6">
            <ImCancelCircle
              onClick={showToggle}
              className="text-4xl text-[#0B6A41] cursor-pointer"
            />
          </div>
          <div className="m-10 text-white w-1/2" onClick={showToggle}>
            {navData?.map((item) => {
              return (
                <ul
                  className="font-Roboto text-black p-4 cursor-pointer text-xl hover:text-2xl"
                  key={item.id}
                >
                  <Link to={item.path}>
                    <li>{item.title}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
