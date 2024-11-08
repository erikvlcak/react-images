<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> main

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import apikey from "../keys.js";
import ImageDetails from "./ImageDetails.jsx";

export default function Homepage() {
  const [images, setImages] = useState(null);
<<<<<<< HEAD
  const [keyword, setKeyword] = useState("");
  const [detailImg, setDetailImg] = useState("");
  const [showDetailImg, setShowDetailImg] = useState(false);

  async function fetchImages() {
=======
  const [keyword, setKeyword] = useState("nature");
  const [detailImg, setDetailImg] = useState("");
  const [showDetailImg, setShowDetailImg] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    setLoading(true);
>>>>>>> main
    let url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${apikey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    setImages(data.results);
<<<<<<< HEAD
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
=======
    console.log(images);
    setLoading(false);
  }

  useEffect(() => fetchImages, []);

  return (
    <>
      <div className="title">Super Duper Search engine</div>
      {showDetailImg && (
        <ImageDetails detailImg={detailImg} showDetailImg={showDetailImg} setShowDetailImg={setShowDetailImg} />
      )}
      <SearchBar setKeyword={setKeyword} fetchImages={fetchImages} />

      {loading ? (
        <div className="loading">LOADING DATA...</div>
      ) : (
        <SearchResults
          keyword={keyword}
          images={images}
          detailImg={detailImg}
          setDetailImg={setDetailImg}
          showDetailImg={showDetailImg}
          setShowDetailImg={setShowDetailImg}
        />
      )}
>>>>>>> main
    </>
  );
}
