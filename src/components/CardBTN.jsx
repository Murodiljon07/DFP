import "../index.css";

const CardBtn = ({ text, onclick }) => {
  return (
    <button className="card-btn btn" onClick={onclick}>
      <i className="bx bx-cart"></i>
      {text}
    </button>
  );
};

export default CardBtn;
