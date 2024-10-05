import React from "react";
import "../App.css"; // Ensure this path is correct
import "../App.css";
import Logo from "../assets/images/Asset 6@4x.png";
import item1 from "../assets/icons/item1.png";
import item2 from "../assets/icons/item2.png";
import item3 from "../assets/icons/item3.png";
import item4 from "../assets/icons/item4.png";
// import backgroundImage from "../assets/images/image.png";
// import image from "../assets/images/image.png";
import images from "../assets/images/images.jpeg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Header />
      <ProductsIndex />
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
            <Link to="/Products" style={{ color: "red" }}>
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
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
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

function ProductsIndex() {
  return (
    <section className="products-Outer">
      <div className="products">
        <div className="product-cover">
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
        </div>
        <div className="product-cover">
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
          <div className="product">
            <img src={images} alt="" />
            <div>From $23</div>
          </div>
        </div>
      </div>
    </section>
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
              stroke="#e2b100"
              fill="#e2b100"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-linecap="round"
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

export default Products;
