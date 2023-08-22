import { Nav } from "./Components/Nav";
import { colours } from "./utils/colours";
import { useState, useEffect } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState({});
  const [bgValue, setBgValue] = useState("#FFFFFF");
  const [displayType, setDisplayType] = useState("hex");

  const selectColor = () => {
    const randomColor = Math.floor(Math.random() * colours.length);
    setSelectedColor(colours[randomColor]);
    console.log(selectedColor);
  };

  useEffect(() => {
    setBgValue(
      displayType === "color" ? selectedColor.color : selectedColor.hex
    );
  }, [selectedColor, displayType]);

  return (
    <>
      <Nav
        handleColorName={() => setDisplayType("color")}
        handleHexCode={() => setDisplayType("hex")}
      />
      <div
        className="w-full h-[100vh] bg-white flex items-center justify-center mt-1"
        style={{ backgroundColor: `${selectedColor?.color}` }}
      >
        <div className="flex flex-col items-center justify-center gap-6 px-[7px]">
          <h2 className=" text-2xl lg:text-3xl font-bold text-center">Background Colour: {bgValue? bgValue : '#FFFFF'}</h2>
          <button
            className=" w-[200px] lg:w-[250px] h-[60px] rounded-xl border-[3px] border-black hover:border-white bg-white hover:bg-purple-500 hover:text-white px-[5px] py-[5px] text-2xl font-semibold 
          transition duration-300 ease-out flex items-center justify-center"
            onClick={selectColor}
          >
            Change Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
