import "../index.css";

const SearchInput = () => {
  return (
    <div className="search-container">
      <i className="bx bx-search-alt"></i>
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
