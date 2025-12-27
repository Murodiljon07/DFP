import "../index.css";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="container footer-container">
          <h3 className="title">Dairy Farm Products</h3>
          <div className="main-bloks">
            <div className="link-boloks">
              <h4 className="title-alt">Links</h4>
              <a href="#">Contact</a>
              <a href="#">Affiliation</a>
              <a href="#">Terms of Use</a>
            </div>
            <div className="link-boloks">
              <h4 className="title-alt">Company</h4>
              <a href="#">Blog</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
            </div>
            <div className="link-boloks">
              <h4 className="title-alt">Categories</h4>
              <a href="#">Eggs</a>
              <a href="#">Drinks</a>
              <a href="#">Eatables</a>
              <a href="#">Milk & Cheeze</a>
            </div>
            <div className="link-boloks">
              <h4 className="title-alt">Terms</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>

            <div className="subcribe">
              <h4 className="title-alt">Subscribe to Newsletter</h4>
              <div className="submit-input">
                <input type="text" placeholder="Enter your email" />
                <button className="btn submit-btn" type="submit">
                  {" "}
                  submit
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-line">
            <p className="">All Rights Reserved - Dairy Farm Products</p>

            <div className="pay-methods">
              <button className="btn">
                <img
                  src="./src/assets/pictures/pay-methods/ApplePay.png"
                  alt=""
                />
              </button>
              <button className="btn">
                <img
                  src="./src/assets/pictures/pay-methods/GooglePay.png"
                  alt="sclisc"
                />
              </button>
              <button className="btn">
                <img
                  src="./src/assets/pictures/pay-methods/visa-logo.png"
                  alt="sacac"
                />
              </button>
              <button className="btn">
                <img
                  src="./src/assets/pictures/pay-methods/Mastercard.png"
                  alt="casca"
                />
              </button>
              <button className="btn">
                <img
                  src="./src/assets/pictures/pay-methods/UnionPay.png"
                  alt="casawca"
                />
              </button>
            </div>

            <p className="">Terms & Conditions . Privacy Policy</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
