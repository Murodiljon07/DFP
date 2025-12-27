import "../assets/styles/main.css";
import "../index.css";

/* components */
import BTN from "../components/Button.jsx";

/* data */
import products from "../data/products.js";

const Main = () => {
  return (
    <>
      <section id="products" className="container">
        <div className="section-head">
          <h2 className="title">Featured Products</h2>
          <div className="move-btns">
            <button className="btn move-btn">
              <img src="./src/assets/pictures/left-move-btn.png" alt="" />
            </button>
            <button className="btn move-btn">
              <img src="./src/assets/pictures/right-move-btn.png" alt="" />
            </button>
          </div>
        </div>

        <section id="main-card-list" className="container">
          {products.map((item) => {
            const { id, title, oldPrice, newPrice, img } = item;

            return (
              <div className="product-card" key={id}>
                <img src={img} alt={title} className="product-img" />
                <p className="product-price">
                  <span className="old-price">£{oldPrice} </span>£{newPrice}
                </p>
                <h3 className="product-title">{title}</h3>

                <button className="add-to-card-btn">+</button>
              </div>
            );
          })}
        </section>
        <BTN text="View all Products"></BTN>
      </section>

      <section className="text-container">
        <div className="main-deck container">
          <div className="main-title">
            <div className="about-us">
              <h3 className="title">Who we are</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <h3 className="title-alt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <BTN text={"Read More"}></BTN>
        </div>
        <img
          src="./src/assets/pictures/slide-pictures.png"
          alt=""
          className="pictures-slide"
        />
      </section>

      <section className="partners container">
        <div className="parners-box">
          <img
            src="./src/assets/pictures/partners-logo/ko-lee-noodles 1.png"
            alt=""
          />
        </div>
        <div className="parners-box">
          <img
            src="./src/assets/pictures/partners-logo/KTC-Logo-1-7723 1.png"
            alt=""
          />
        </div>
        <div className="parners-box">
          <img src="./src/assets/pictures/partners-logo/Logo 1.png" alt="" />
        </div>
        <div className="parners-box">
          <img
            src="./src/assets/pictures/partners-logo/woerle_logo_298x114 1.png"
            alt=""
          />
        </div>
      </section>

      <section className="go-shopping container">
        <div className="go-link-container">
          <h2 className="title">Launch Sale is On</h2>
          <p className="text">Shop today</p>
        </div>

        <button className="go-shop-btn">
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </section>
    </>
  );
};

export default Main;
