/* eslint-disable react/prop-types */

export default function SearchBar({ setKeyword, fetchImages }) {
  return (
    <div>
      <h1>Search images by this keyword: </h1>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="Type the keyword here..."
      />
      <button onClick={fetchImages}>Search</button>
    </div>
  );
}
