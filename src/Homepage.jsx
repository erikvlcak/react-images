import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import apikey from "../keys.js";
import ImageDetails from "./ImageDetails.jsx";

export default function Homepage() {
  const [images, setImages] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [detailImg, setDetailImg] = useState("");
  const [showDetailImg, setShowDetailImg] = useState(false);

  async function fetchImages() {
    let url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${apikey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    setImages(data.results);
    console.log(keyword);
    console.log(images);
  }

  return (
    <>
      <SearchBar setKeyword={setKeyword} fetchImages={fetchImages} />
      <SearchResults
        images={images}
        keyword={keyword}
        setDetailImg={setDetailImg}
        showDetailImg={showDetailImg}
        setShowDetailImg={setShowDetailImg}
      />
      {showDetailImg ?? (
        <ImageDetails detailImg={detailImg} showDetailImg={showDetailImg} setShowDetailImg={setShowDetailImg} />
      )}
    </>
  );
}
