import { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { allItems } from "../../Constants/index.jsx";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="flex items-center mx-auto h-14 gap-4 w-full bg-amazon_blue text-white px-4 py-3">
        {/* ===============Header 1 Start ======================  */}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="" />
        </div>

        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="flex flex-col text-sm text-lightText font-light">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              India
            </span>
          </p>
        </div>

        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full  flex  justify-center items-center bg-gray-200 hover:bg-gray-300 duration-300 text-amazon_blue cursor-pointer rounded-tl-md rounded-bl-md"
          >
            All{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden  bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
              {allItems.map((item) => (
                <li
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        {/* <Link to="/signin"> */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
            Hello, sign in
          </p>
          <p className="text-sm text-whiteText font-semibold -mt-1 hidden mdl:inline-flex">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        {/* </Link> */}

        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm text-whiteText font-semibold -mt-1">& Orders</p>
        </div>

        <div className="flex items-start justify-center headerHover relative ">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>

        {/* ================ Header 1 End ===============  */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;