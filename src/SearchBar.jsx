/* eslint-disable react/prop-types */

export default function SearchBar({ setKeyword, fetchImages }) {
  return (
    <div className="searchArea">
      <div className="seachHeader">Search images by this keyword: </div>
      <input
        className="searchBar"
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="Type the keyword here..."
      />
      <button className="searchButton" onClick={fetchImages}>
        Search
      </button>
    </div>
  );
}
