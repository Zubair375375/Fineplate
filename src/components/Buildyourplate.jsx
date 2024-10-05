import React, { useState, useEffect, useRef } from "react";
import "../App.css"; // Ensure this path is correct
import "../App.css";
import "../styles/BYplate.css";
import Logo from "../assets/images/Asset 6@4x.png";
import item1 from "../assets/icons/item1.png";
import item2 from "../assets/icons/item2.png";
import item3 from "../assets/icons/item3.png";
import item4 from "../assets/icons/item4.png";
import people from "../assets/icons/people.png";
import quality from "../assets/icons/quality.png";
import reliability from "../assets/icons/reliability.png";
// import backgroundImage from "../assets/images/image.png";
import image from "../assets/images/image.png";
import images from "../assets/images/images.jpeg";
import { Link, useNavigate, useLocation } from "react-router-dom";

function BYP({
  regNo,
  setRegNo,
  dataStorage,
  setDataStorage,
  type,
  setType,
  position,
  setPosition,
  size,
  setSize,
  material,
  setMaterial,
  font,
  setFont,
  border,
  setBorder,
  borderThickness,
  setBorderThickness,
  color,
  setColor,
  fontFamily,
  setFontFamily,
  backgroundColor,
  setBackgroundColor,
  numberPlateStyle,
  totalPrice,
  setTotalPrice,
  borderStyle,
  setBorderStyle,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <Buildyourplate
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
        openModal={openModal}
        modalRef={modalRef}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        numberPlateStyle={numberPlateStyle}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        borderStyle={borderStyle}
        setBorderStyle={setBorderStyle}
      />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="header-first">
        <img src={Logo} alt="Logo" />
        <ul className="header-first-ul">
          <li>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Products" style={{ color: "white" }}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ color: "white" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Blog" style={{ color: "white" }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/Contact" style={{ color: "white" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/LoginSignUp" style={{ color: "white" }}>
              Login/Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/Cart"
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "0.4rem" }}
              >
                <path
                  d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              <span>Cart</span>
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="mobile-menu">
          <li>Home</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Login/Sign Up</li>
          <li>
            <img src="#" alt="Cart Icon" /> <span>Cart</span>
          </li>
        </ul>
      </div>
      <div className="header-second">
        <span className="dmo">
          DON'T MISS OUT: Contact us for trade rates and bulk discounts
        </span>
        <button>Build Your Plate</button>
      </div>
      <div className="header-third">
        <ul className="header-third-ul">
          <li>
            <img src={item1} alt="Quality Guarantee" />
            <span>Quality Guarantee</span>
          </li>
          <li>
            <img src={item2} alt="No Hidden Costs" />
            <span>No Hidden Costs</span>
          </li>
          <li>
            <img src={item3} alt="Customer Care Service" />
            <span>Customer Care Service</span>
          </li>
          <li>
            <img src={item4} alt="Same Day Dispatch" />
            <span>Same Day Dispatch</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Buildyourplate({
  dataStorage,
  setDataStorage,
  font,
  setFont,
  border,
  setBorder,
  openModal,
  modalRef,
  isModalOpen,
  setIsModalOpen,
  numberPlateStyle,
}) {
  // ?????????????
  const [regNo, setRegNo] = useState(() => {
    const storedRegNo = sessionStorage.getItem("RegistrationNo");
    console.log("Retrieved registration number:", storedRegNo); // Check what's being retrieved
    return storedRegNo || "";
  });

  const [type, setType] = useState("Car");
  const [position, setPosition] = useState("Front Only");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("Arial");

  const [borderStyle, setBorderStyle] = useState(() => {
    return sessionStorage.getItem("BorderStyle") || "none";
  });

  const [borderThickness, setBorderThickness] = useState("medium");
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState("Standard Car Oblong (20.5x4.4in)");
  const [material, setMaterial] = useState("regular");
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const prices = {
    Car: 5,
    Arial: 1,
    solid: 2,
    medium: 0.8,
    regular: 2,
    "Standard Car Oblong (20.5x4.4in)": 5,
  };

  // Calculate total price based on selected options
  const calculateTotalPrice = () => {
    const price =
      (prices[type] || 0) +
      (prices[fontFamily] || 0) +
      (prices[borderStyle] || 0) +
      (prices[borderThickness] || 0) +
      (prices[material] || 0) +
      (prices[size] || 0);
    setTotalPrice(price.toFixed(2));
  };

  // Calculate total price whenever relevant states change
  useEffect(() => {
    calculateTotalPrice();
  }, [type, fontFamily, borderStyle, borderThickness, material, size]);

  // Debugging registration number changes
  useEffect(() => {
    console.log("Current registration number:", regNo);
  }, [regNo]);

  // Handle border style change and update session storage
  const handleBorderChange = (e) => {
    const selectedStyle = e.target.value;
    setBorderStyle(selectedStyle);
    sessionStorage.setItem("BorderStyle", selectedStyle);
  };

  useEffect(() => {
    const storedItem = sessionStorage.getItem("itemToEdit");
    const storedIndex = sessionStorage.getItem("editIndex");

    if (storedItem && storedIndex !== null) {
      const itemData = JSON.parse(storedItem);
      setRegNo(itemData.RegistrationNo || "");
      setType(itemData.type || "Car");
      setPosition(itemData.position || "Front Only");
      setBackgroundColor(itemData.backgroundColor || "#ffffff");
      setFontFamily(itemData.fontFamily || "Arial");
      setBorderStyle(itemData.borderStyle || "none");
      setBorderThickness(itemData.borderThickness || "medium"); // Ensure this is stored
      setColor(itemData.color || "#ffffff"); // Ensure this is stored
      setSize(itemData.size || "Standard Car Oblong (20.5x4.4in)");
      setMaterial(itemData.material || "regular");

      // Optionally, remove 'itemToEdit' and 'editIndex' from session storage after loading
      // sessionStorage.removeItem("itemToEdit");
      // sessionStorage.removeItem("editIndex");
    }
  }, []);

  // Handle form submission and store data in session storage
  // const handleSubmitData = (e) => {
  //   e.preventDefault();
  //   // const data = {
  //   //   RegistrationNo: regNo,
  //   //   type: type,
  //   //   position: position,
  //   //   fontFamily: fontFamily,
  //   //   borderStyle: borderStyle, // Fixed the reference here
  //   //   backgroundColor: backgroundColor,
  //   //   size: size,
  //   //   material: material,
  //   // };
  //   // sessionStorage.removeItem("usersData");

  //   const data = {
  //     RegistrationNo: regNo,
  //     type: type,
  //     position: position,
  //     fontFamily: fontFamily,
  //     borderStyle: borderStyle,
  //     backgroundColor: backgroundColor,
  //     size: size,
  //     material: material,
  //   };

  //   // Retrieve existing users' data from session storage or initialize an empty array
  //   let storedUsersData = JSON.parse(sessionStorage.getItem("usersData")) || [];

  //   // Log the data before adding the new record
  //   console.log("Before adding new record:", storedUsersData);

  //   // Add the new user's data to the array
  //   storedUsersData.push(data);

  //   // Log the data after adding the new record
  //   console.log("After adding new record:", storedUsersData);

  //   // Store the updated array back in session storage
  //   sessionStorage.setItem("usersData", JSON.stringify(storedUsersData));

  //   // Log the final content in session storage
  //   console.log(
  //     "All users' data stored in session storage:",
  //     sessionStorage.getItem("usersData")
  //   );

  //   // Store the data in session storage
  //   // sessionStorage.setItem("RegistrationNo", regNo);
  //   // sessionStorage.setItem("type", type);
  //   // sessionStorage.setItem("position", position);
  //   // sessionStorage.setItem("fontFamily", fontFamily);
  //   // sessionStorage.setItem("borderStyle", borderStyle); // Corrected reference
  //   // sessionStorage.setItem("backgroundColor", backgroundColor);
  //   // sessionStorage.setItem("size", size);
  //   // sessionStorage.setItem("material", material);

  //   console.log("Data stored in session storage:", data);

  //   setRegNo("");
  //   setType("Car");
  //   setFontFamily("Arial");
  //   setPosition("Front Only");
  //   setSize("Standard Car Oblong (20.5x4.4in)");
  //   setMaterial("Regular");
  // };
  // Handle form submission and store data in session storage
  const handleSubmitData = (e) => {
    e.preventDefault();

    const data = {
      RegistrationNo: regNo,
      type: type,
      position: position,
      fontFamily: fontFamily,
      borderStyle: borderStyle,
      backgroundColor: backgroundColor,
      size: size,
      material: material,
      totalPrice: totalPrice,
    };

    // Retrieve existing users' data from session storage or initialize an empty array
    let storedUsersData = JSON.parse(sessionStorage.getItem("usersData")) || [];

    // Retrieve itemToEdit and editIndex from session storage
    const itemToEdit = JSON.parse(sessionStorage.getItem("itemToEdit"));
    const editIndex = parseInt(sessionStorage.getItem("editIndex"), 10);

    console.log("itemToEdit:", itemToEdit);
    console.log("editIndex:", editIndex);

    if (itemToEdit && editIndex !== null && !isNaN(editIndex)) {
      // Verify if the index is within bounds
      if (editIndex >= 0 && editIndex < storedUsersData.length) {
        storedUsersData[editIndex] = data;
        console.log(
          `Updated record at index ${editIndex} with new data:`,
          data
        );
      } else {
        console.warn("Invalid editIndex. No record updated.");
      }
    } else {
      // Add the new record if no existing item to edit
      storedUsersData.push(data);
      console.log("Added new record:", data);
    }

    // Store the updated array back in session storage
    sessionStorage.setItem("usersData", JSON.stringify(storedUsersData));

    // Log the final content in session storage
    console.log(
      "All users' data stored in session storage:",
      JSON.parse(sessionStorage.getItem("usersData"))
    );

    // Clear session storage and form fields
    sessionStorage.removeItem("itemToEdit");
    sessionStorage.removeItem("editIndex");
    setRegNo("");
    setType("Car");
    setFontFamily("Arial");
    setPosition("Front Only");
    setSize("Standard Car Oblong (20.5x4.4in)");
    setMaterial("Regular");
  };

  // Handle form reset and clear session storage
  const handleAddToCart = () => {
    setRegNo("");
    setType("Car");
    setFontFamily("Arial");
    setPosition("Front Only");
    setSize("Standard Car Oblong (20.5x4.4in)");
    setMaterial("Regular");
    sessionStorage.removeItem("RegistrationNo");
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("position");
    sessionStorage.removeItem("fontFamily");
    sessionStorage.removeItem("borderStyle");
    sessionStorage.removeItem("backgroundColor");
    sessionStorage.removeItem("size");
    sessionStorage.removeItem("material");
  };

  // ????????????/

  const GeneralFAQ = [
    {
      question: "What is a Show Plate?",
      answer:
        "A show plate is a plate where the design does not conform to road legal standards and therefore is not appropriate for fixing to a vehicle intended for road use...",
    },
    {
      question: "Will the BS legal details appear on my plates?",
      answer:
        "The road compliant tab of the plate builder restricts the customisation options to only those permitted within the legislation...",
    },
    {
      question: "How do I ensure my plates are made to legal standards?",
      answer:
        "This will depend on the jurisdiction in which you intend to use the plates on your vehicle...",
    },
  ];

  const PostandDeliveryFAQ = [
    {
      question: "What delivery options do you offer and how do they work?",
      answer: "Please refer to our delivery information page....",
    },
    {
      question: "How long will my order take to be delivered?",
      answer:
        "We use the Evri delivery network via HubEurope, enabled by daily flights out of the Channel Islands to the UK. Orders placed by 3pm are dispatched on the same day for weekdays. Any orders placed after 3pm on a Friday until 3pm on a Monday will all be dispatched on the Monday (excluding bank holiday). Production continues throughout, however our postal partners don’t offer pick-ups during weekends and holidays.",
    },
    {
      question: "How will my order be packed?",
      answer:
        "Depending on the size and volume of plates ordered, they will be placed in a specifically designed envelope / bubble lined package with a thin film separator between plates in order to offer protection. An order label that states that the package contains number plates will be displayed in small font on the front of the package (a customs label), so it is best to be the first to the door if ordering as a present.",
    },
  ];

  const OrdersFAQ = [
    {
      question: "Is any documentation required to place an order?",
      answer:
        "No. It is as simple as creating your design / plate within the plate builder, adding to the cart and proceeding through checkout. At no point is a copy of your identification or V5 documentation required.",
    },
    {
      question:
        "What is the difference between Acrylic & (regular) ABS plates?",
      answer:
        "ABS and Acrylic are both types of plastic. Acrylic is more brittle than ABS, and ABS is a bit softer than acrylic. ABS is typically very dark and Acrylic is typically transparent. In the context of (our) number plates, ABS is a hard black backing, pre-layered with a reflective film overlaying the plate, where our printed media is front applied over the reflective. Therefore the printed film (and therefore registration/design) is exposed on the front of the plate. Acrylic plates use a 3 layer manufacturing process, where the printed film/media is applied to the back of the acrylic plate and a separate reflective layer then rolled on the back of the film. You are therefore viewing the printed film through the transparent acrylic plastic, meaning that the film isn’t exposed. Although no contact at all is generally desirable, it means that if the plate is scratched or damaged, the acrylic takes the brunt of it rather than the film. Both are BSAU (UK road) compliant, so ultimately it is down to individual preference as to weigh up the cost vs quality balance.",
    },
    {
      question: "Can I amend my order?",
      answer:
        "Due to the quick service turnaround we offer, it can be very difficult to amend orders once finalized. This is as orders are printed upon order receipt during the working day. However, if you notice a required adjustment soon after placing your order, we are usually able to make changes if you contact us as soon as possible.",
    },
  ];

  const FittingYourPlates = [
    {
      question: "How do I fit my plate(s) using a car fixing kit?",
      answer:
        "You will need a drill & drill bit to fit plates using either our car or bike number plate fixing kits. Alternatively, you can use our sticky pads sets to allow a cleaner finish. One set of strips will fit a set of plates.",
    },
    {
      question: "How do I fit my plate using a bike fixing kit?",
      answer:
        "You will need a drill & drill bit to fit plates using either our car or bike number plate fixing kits. Alternatively, you can use our sticky pads sets to allow a cleaner finish. One set of strips will fit a set of plates.",
    },
    {
      question: "How do I fix plates to a vehicle using sticky pads?",
      answer:
        "We supply double sided sticky pads in strips of 10 tabs. 5 pads is more than sufficient for each plate and therefore 10 is enough for a set. Ensure to remove your old plate(s), clean the area sufficiently and ensure the area is dry ahead of fixing your new plate(s).",
    },
  ];

  const PlateDesigns = [
    {
      question: "What is a Show Plate?",
      answer:
        "A show plate is a plate where the design does not conform to road legal standards and therefore is not appropriate for fixing to a vehicle intended for road use...",
    },
    {
      question: "Will the BS legal details appear on my plates?",
      answer:
        "The road compliant tab of the plate builder restricts the customisation options to only those permitted within the legislation...",
    },
    {
      question: "How do I ensure my plates are made to legal standards?",
      answer:
        "This will depend on the jurisdiction in which you intend to use the plates on your vehicle...",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("General FAQ");

  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section className="plate-builder" style={{ backgroundColor: "black" }}>
        <h1 className="section-title" style={{ color: "red" }}>
          Plate Builder
        </h1>
        <div id="roadCompliant" className="tabcontent active">
          <div className="builder-content" style={{ borderRadius: "8px" }}>
            <div className="tabs">
              <button
                className="tablinks active"
                style={{ backgroundColor: "red" }}
              >
                Road Compliant Plates
              </button>
              <button className="tablinks">Show Plates</button>
            </div>
            <div
              className="builder-content-customization-area"
              style={{
                margin: "0 3rem",
                backgroundColor: "black",
                borderRadius: "8px",
              }}
            >
              <div
                className="plate-preview"
                style={{ backgroundColor: "black" }}
              >
                <div>
                  <h3>Your Plate Preview</h3>
                  <div
                    className="plate-container"
                    style={{
                      backgroundColor: "gray",
                      padding: "1rem",
                      width: "335px",
                    }}
                  >
                    <div
                      className="plate"
                      style={numberPlateStyle}
                      key={"RegistrationNo"}
                    >
                      {regNo}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="plate-options"
                style={{ backgroundColor: "black" }}
              >
                <h2>Configure your plate options</h2>
                <form onSubmit={handleSubmitData}>
                  <div className="option">
                    <input
                      type="text"
                      id="reg"
                      placeholder="Enter Your Reg"
                      value={regNo}
                      required
                      onChange={(e) => setRegNo(e.target.value)}
                    />
                  </div>
                  <div className="option">
                    <label>Type:</label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        checked={type === "Car"}
                        onChange={() => setType("Car")}
                      />
                      Car
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        checked={type === "Motorbike"}
                        onChange={() => setType("Motorbike")}
                      />
                      Motorbike
                    </label>
                  </div>
                  <div className="option">
                    <label>Position:</label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        defaultChecked
                        onClick={() => setPosition("Front Only")}
                      />{" "}
                      Front Only
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setPosition("Rear Only")}
                      />{" "}
                      Rear Only
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setPosition("Both (Front & Rear)")}
                      />{" "}
                      Both
                    </label>
                  </div>
                  <div style={{ marginBlock: "1.6rem" }}>
                    <label>
                      Plate Background Color:
                      <input
                        style={{ marginLeft: "0.6rem" }}
                        type="color"
                        // onChange={handleBackgroundColorChange}
                      />
                    </label>
                  </div>
                  <div className="option">
                    <label>Font Style</label>
                    <select
                    //  onChange={handleFontChange}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Verdana">Verdana</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Courier New">Courier New</option>
                      <option value="Trebuchet MS">Trebuchet MS</option>
                      <option value="Lucida Console">Lucida Console</option>
                      <option value="Tahoma">Tahoma</option>
                      <option value="Impact">Impact</option>
                      <option value="Comic Sans MS">Comic Sans MS</option>
                      <option value="Palatino Linotype">
                        Palatino Linotype
                      </option>
                      <option value="Garamond">Garamond</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Brush Script MT">Brush Script MT</option>
                    </select>
                  </div>
                  <div className="option">
                    <label>Border Style</label>
                    <select value={borderStyle} onChange={handleBorderChange}>
                      <option value="none">None</option>
                      <option value="solid">Solid</option>
                      <option value="dashed">Dashed</option>
                      <option value="dotted">Dotted</option>
                    </select>
                    <p
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={openModal}
                    >
                      Edit
                    </p>
                  </div>
                  <div className="option">
                    <label>Size</label>
                    <select onChange={(e) => setSize(e.target.value)}>
                      <option>Standard Car Oblong (20.5x4.4in)</option>
                      <option value="Minimal Car (13x6.5in)" data-break="true">
                        Minimal Car (13x6.5in)
                      </option>
                      <option value="Minimal Car (13x6in)" data-break="true">
                        Minimal Car (13x6in)
                      </option>
                      <option value="Minimal Car (13x7in)" data-break="true">
                        Minimal Car (13x7in)
                      </option>
                      <option value="Minimal Car (13x8in)" data-break="true">
                        Minimal Car (13x8in)
                      </option>
                      <option value="Minimal Car (14x7in)" data-break="true">
                        Minimal Car (14x7in)
                      </option>
                      <option
                        value="Oversized Car Oblong (16x4.5in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (16x4.5in)
                      </option>
                      <option
                        value="Oversized Car Oblong (20.5x5.5in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (20.5x5.5in)
                      </option>
                      <option
                        value="Oversized Car Oblong (20.5x5in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (20.5x5in)
                      </option>
                      <option
                        value="Oversized Car Oblong (20.5x6in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (20.5x6in)
                      </option>
                      <option
                        value="Oversized Car Oblong (21x 6in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (21x 6in)
                      </option>
                      <option
                        value="Oversized Car Oblong (22x6in)"
                        data-break="false"
                      >
                        Oversized Car Oblong (22x6in)
                      </option>
                      <option
                        value="Standard Car Square 4X4 (11x8in)"
                        data-break="true"
                      >
                        Standard Car Square 4X4 (11x8in)
                      </option>
                      <option
                        value="Standard Car Oblong (20.5x4.4in)"
                        data-break="false"
                      >
                        Standard Car Oblong (20.5x4.4in)
                      </option>
                    </select>
                  </div>
                  <div className="option">
                    <label>Plate Material</label>
                    <select
                      onChange={(e) => setMaterial(e.target.value)}
                      required
                    >
                      <option value="regular">Regular</option>
                      <option value="acrylic">Acrylic</option>
                      <option value="3D Domed">3D Domed</option>
                      <option value="4D Raised">4D Raised</option>
                      <option value="5D Raised">5D Raised</option>
                    </select>
                  </div>

                  {/* <button type="submit">Submit</button> */}
                  <button type="reset" onClick={handleAddToCart}>
                    Reset
                  </button>
                  <button type="submit">Add To Cart</button>
                </form>

                <div className="order-info">
                  <p>
                    Want your plates dispatched today? Order within
                    <strong>3hrs 1min</strong>
                  </p>
                  <p className="total-price">
                    Total Price: <strong>{`$${totalPrice}`}</strong>
                  </p>
                  {/* <button
                    type="Submit"
                    onClick={handleSubmitData}
                    disabled={!regNo} // Disable button if input is empty
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="review-section rs-for-byp">
        <div className="car-image">
          <img src="./images/image.png" alt="Car Image" />
        </div>
        <div className="reviews">
          <div className="review">
            <h3>John Doe</h3>
            <p>
              "This car is amazing! The performance is top-notch, and it's very
              comfortable."
            </p>
          </div>
          <div className="review">
            <h3>Jane Smith</h3>
            <p>
              "I love the sleek design and the fuel efficiency. It's perfect for
              city driving."
            </p>
          </div>
          {/* <!-- Add more reviews as needed --> */}
        </div>
      </div>

      <section className="faq">
        <h2>Got a question - let us help</h2>
        <p>
          With over 20 years experience in the industry we've most likely got
          the answer to your question
        </p>

        <div className="faq-tabs">
          <button
            className={`faq-tab ${activeTab === "General FAQ" ? "active" : ""}`}
            onClick={() => handleToggle("General FAQ")}
          >
            General FAQ
          </button>
          <button
            className={`faq-tab ${
              activeTab === "Post and Delivery FAQ" ? "active" : ""
            }`}
            onClick={() => handleToggle("Post and Delivery FAQ")}
          >
            Post and Delivery FAQ
          </button>
          <button
            className={`faq-tab ${activeTab === "Orders FAQ" ? "active" : ""}`}
            onClick={() => handleToggle("Orders FAQ")}
          >
            Orders FAQ
          </button>
          <button
            className={`faq-tab ${
              activeTab === "Fitting your plates" ? "active" : ""
            }`}
            onClick={() => handleToggle("Fitting your plates")}
          >
            Fitting your plates
          </button>
          <button
            className={`faq-tab ${
              activeTab === "Plate Designs" ? "active" : ""
            }`}
            onClick={() => handleToggle("Plate Designs")}
          >
            Plate Designs
          </button>
        </div>

        <div
          className={`faq-content ${
            activeTab === "General FAQ" ? "active" : ""
          }`}
          id="general"
        >
          {GeneralFAQ.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="faq-content active" id="general">
          <div className="faq-item">
            <h3>What is a Show Plate?</h3>
            <p>
              A show plate is a plate where the design does not conform to road
              legal standards and therefore is not appropriate for fixing to a
              vehicle intended for road use. The plate builder will not allow
              the design to go outside of the UK road compliant criteria if you
              remain within the ‘Road compliant’ tab of the plate builder.
              Switching to the ‘show plate’ tab will drastically open up the
              design options available to the plate(s).
            </p>
          </div>
          <div className="faq-item">
            <h3>Will the BS legal details appear on my plates?</h3>
            <p>
              The road compliant tab of the plate builder restricts the
              customisation options to only those permitted within the
              legislation and will therefore include the required BS details.
              The show plate tab should be selected to allow further
              customisation or if you would like the BS details to be omitted,
              however the plate(s) would then be classNameified as show plates.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I ensure my plates are made to legal standards?</h3>
            <p>
              This will depend on the jurisdiction in which you intend to use
              the plates on your vehicle. For the UK, details can be found on
              the UK government website.
            </p>
          </div>
        </div> */}
        <div
          className={`faq-content ${
            activeTab === "Post and Delivery FAQ" ? "active" : ""
          }`}
          id="general"
        >
          {PostandDeliveryFAQ.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`faq-content ${
            activeTab === "Orders FAQ" ? "active" : ""
          }`}
          id="general"
        >
          {OrdersFAQ.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`faq-content ${
            activeTab === "Fitting your plates" ? "active" : ""
          }`}
          id="general"
        >
          {FittingYourPlates.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`faq-content ${
            activeTab === "Plate Designs" ? "active" : ""
          }`}
          id="general"
        >
          {PlateDesigns.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="faq-content active" id="general">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 onClick={() => handleClick(index)}>
                {item.question}
                <span
                  className={`plus-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  +
                </span>
              </h3>
              <p className={`answer ${activeIndex === index ? "show" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="faq-content" id="orders">
          <div className="faq-item">
            <h3>Is any documentation required to place an order?</h3>
            <p>
              No. It is as simple as creating your design / plate within the
              plate builder, adding to the cart and proceeding through checkout.
            </p>
          </div>
          <div className="faq-item">
            <h3>
              What is the difference between Acrylic & (regular) ABS plates?
            </h3>
            <p>
              Acrylic plates are more durable and resistant to weather
              conditions.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I amend my order?</h3>
            <p>Yes, you can amend your order before it is dispatched.</p>
          </div>
        </div>

        <div className="faq-content" id="fitting">
          <div className="faq-item">
            <h3>How do I fit my plate(s) using a car fixing kit?</h3>
            <p>
              You will need a drill & drill bit to fit plates using either our
              car or bike number plate fixing kits.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I fix plates to a vehicle using sticky pads?</h3>
            <p>
              Sticky pads provide a cleaner finish and can be used instead of
              screws.
            </p>
          </div>
        </div>

        <div className="faq-content" id="designs">
          <div className="faq-item">
            <h3>How do I design my plate?</h3>
            <p>
              You can customize your plate by choosing the type, position, size,
              material, font style, border style, and left badge using our plate
              builder.
            </p>
          </div>
        </div> */}

        <div className="contact-us">
          <p>
            Can't find the answer you're looking for? Send us an email. 8 AM – 4
            PM MONDAY TO FRIDAY
          </p>
          <button>Send Us a Message</button>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot1">
        <img src={Logo} alt="logo" />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 -0.5 25 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
              stroke="#e2b100"
              fill="#e2b100"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="15.5"
              y="9"
              width="2"
              height="2"
              rx="1"
              transform="rotate(-90 15.5 9)"
              fill="#e2b100"
            />
            <rect
              x="16"
              y="8.5"
              width="1"
              height="1"
              rx="0.5"
              transform="rotate(-90 16 8.5)"
              stroke="#000000"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="#e2b100"
          >
            <path
              d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
              fill="#e2b100"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#e2b100"
            width="50px"
            height="50px"
            viewBox="-4 0 32 32"
            version="1.1"
          >
            <title>twitter</title>
            <path d="M24 8.531c-0.688 1-1.5 1.844-2.469 2.563 0.031 0.219 0.031 0.438 0.031 0.656 0 6.5-4.938 14-14 14-2.781 0-5.375-0.844-7.563-2.219 0.375 0.031 0.781 0.094 1.188 0.094 2.313 0 4.406-0.813 6.094-2.125-2.188-0.031-3.969-1.5-4.594-3.438 0.281 0.063 0.625 0.094 0.938 0.094 0.438 0 0.906-0.063 1.313-0.188-2.281-0.438-3.969-2.406-3.969-4.781v-0.063c0.688 0.344 1.406 0.563 2.219 0.594-1.313-0.906-2.188-2.406-2.188-4.094 0-0.906 0.25-1.75 0.656-2.5 2.438 2.969 6.063 4.969 10.156 5.156-0.063-0.344-0.125-0.75-0.125-1.125 0-2.719 2.188-4.938 4.906-4.938 1.438 0 2.719 0.625 3.625 1.594 1.125-0.219 2.156-0.656 3.094-1.219-0.344 1.156-1.125 2.156-2.125 2.75 1-0.125 1.906-0.406 2.813-0.813z" />
          </svg>
        </span>
      </div>
      <div className="foot2">
        <div className="foot-text">
          <a href="#">Create your custom plate</a>
          <a href="#">Products</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        <div className="foot-text">
          <a href="#">Shopping basket</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Delivery info</a>
          <a href="#">FAQ</a>
        </div>
        <div className="foot-text">
          <a href="#">admin@fineplates.com</a>
          <a href="#">Monday - Friday 8am - 4pm</a>
        </div>
        <div className="foot-text"></div>
      </div>
    </footer>
  );
}

export default BYP;
