import { useState } from "react";
import Logo from "../Images/northwest_petroleum_logo.png";
import { navData } from "../../assets/Data/navData";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div>
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
      <div className="m-0 sticky top-0 z-50 bg-white overflow-hidden">
          <div className="relative w-[92%] mx-auto p-4 flex justify-between items-center">
            <div className=" w-[50px] lg:w-[80px]">
              <img src={Logo} alt="" className="w-full" />
            </div>
            <nav className=" hidden lg:flex items-center space-x-8 list-none  font-medium font-Inter">
              {navData?.map((item) => {
                return (
                  <ul className="" key={item.id}>
                    <li className="nav-link">
                      <a href={item.path}>{item.title}</a>
                    </li>
                  </ul>
                );
              })}
            </nav>
            <div className="absolute top-4 right-4">
              <AiOutlineMenu
                className="lg:hidden text-3xl hover:text-[#0B6A42]"
                onClick={showToggle}
              />
            </div>
          </div>
        </div>
      {toggle ? (
        <div className="lg:hidden fixed w-screen h-screen top-7 left-0 bg-white translate-x-0 duration-[950ms] z-20">
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
