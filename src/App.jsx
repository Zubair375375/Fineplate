import React from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import LoginSignUp from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Buildyourplate from "./components/Buildyourplate.jsx";
import CheckOut from "./components/Checkout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [regNo, setRegNo] = useState("");
  let [dataStorage, setDataStorage] = useState([]);
  const [type, setType] = useState("Car");
  const [borderStyle, setBorderStyle] = useState("none");
  const [position, setPosition] = useState("Front Only");
  const [size, setSize] = useState("Standard Car Oblong (20.5x4.4in)");
  const [material, setMaterial] = useState("regular");
  const [font, setFont] = useState("");
  const [border, setBorder] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [quantity, setQuantity] = useState(1);

  // const [storedUsersData, setStoredUsersData]
  const [borderThickness, setBorderThickness] = useState("medium");
  const [color, setColor] = useState("#ffffff");

  const [totalPrice, setTotalPrice] = useState(0); //it include the price excluding quantity
  const [finalPrice, setFinalPrice] = useState(totalPrice);

  useEffect(() => {
    console.log("Updated dataStorage:", dataStorage);
  }, [dataStorage]);

  const numberPlateStyle = {
    border: `${borderThickness} solid ${color}`,
    fontFamily: fontFamily,
    backgroundColor: backgroundColor,
    padding: "10px",
    textAlign: "center",
    fontSize: "2rem",
    width: "300px",
    height: "100px",
    color: "black",
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                regNo={regNo}
                setRegNo={setRegNo}
                dataStorage={dataStorage}
                setDataStorage={setDataStorage}
              />
            }
          />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LoginSignUp" element={<LoginSignUp />} />
          <Route
            path="/Cart"
            element={
              <Cart
                dataStorage={dataStorage}
                setDataStorage={setDataStorage}
                numberPlateStyle={numberPlateStyle}
                regNo={regNo}
                quantity={quantity}
                setQuantity={setQuantity}
                type={type}
                position={position}
                size={size}
                fontFamily={fontFamily}
                backgroundColor={backgroundColor}
                border={border}
                borderThickness={borderThickness}
                color={color}
                material={material}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                finalPrice={finalPrice}
                setFinalPrice={setFinalPrice}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
              />
            }
          />
          <Route
            path="/Build-your-plate"
            element={
              <Buildyourplate
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                numberPlateStyle={numberPlateStyle}
                regNo={regNo}
                setRegNo={setRegNo}
                dataStorage={dataStorage}
                setDataStorage={setDataStorage}
                type={type}
                setType={setType}
                position={position}
                setPosition={setPosition}
                size={size}
                setSize={setSize}
                material={material}
                setMaterial={setMaterial}
                font={font}
                setFont={setFont}
                border={border}
                setBorder={setBorder}
                borderThickness={borderThickness}
                setBorderThickness={setBorderThickness}
                color={color}
                setColor={setColor}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            }
          />
          <Route path="/Checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
