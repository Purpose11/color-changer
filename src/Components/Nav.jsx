import PropTypes from "prop-types";

export const Nav = ({ handleColorName, handleHexCode }) => {
  return (
    <div
      className="w-full h-20 flex items-center justify-between px-[30px] lg:px-24 shadow-md"
    >
      <h2 className=" text-2xl lg:text-3xl font-semibold">Color Flipper</h2>
      <div className="flex gap-4 lg:gap-6">
        <a
          className="text-xl underline cursor-pointer text-purple-700"
          onClick={handleColorName}
        >
          Simple
        </a>
        <a
          className="text-xl underline cursor-pointer text-purple-700"
          onClick={handleHexCode}
        >
          Hex
        </a>
      </div>
    </div>
  );
};

Nav.propTypes = {
  handleColorName: PropTypes.func.isRequired,
  handleHexCode: PropTypes.func.isRequired,
};

export default Nav;
