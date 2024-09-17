import "./Product.css";
import Chatpop from "../Chatpopup/chatpop";
import romanshoes2 from "../../assets/romanshoes2.png";
import romanshoes3 from "../../assets/romanshoes3.png";
import romanshoes4 from "../../assets/romanshoes4.png";

export default function Product() {
  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper gridView">
            <div className="products-row">
              <button className="cell-more-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              <div className="product-cell image">
                <img src={romanshoes3} alt="product" />
                <span>Rockers</span>
              </div>
              <div className="product-cell category">
                <span className="cell-label">Category:</span>Sneakers
              </div>
              <div className="product-cell price">
                <span className="cell-label">Price:</span>$560
              </div>
            </div>
            <div className="products-row">
              <button className="cell-more-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              <div className="product-cell image">
                <img src={romanshoes2} alt="product" />
                <span>Office Shoes</span>
              </div>
              <div className="product-cell category">
                <span className="cell-label">Category:</span>Formal
              </div>
              <div className="product-cell price">
                <span className="cell-label">Price:</span>$710
              </div>
            </div>
            <div className="products-row">
              <button className="cell-more-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              <div className="product-cell image">
                <img src={romanshoes4} alt="product" />
                <span>Athletic Shoes</span>
              </div>
              <div className="product-cell category">
                <span className="cell-label">Category:</span>Sports
              </div>
              <div className="product-cell price">
                <span className="cell-label">Price:</span>$360
              </div>
            </div>
          </div>
        </div>
        <Chatpop />
      </div>
    </>
  );
}
