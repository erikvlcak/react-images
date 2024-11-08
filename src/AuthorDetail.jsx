import { useEffect, useState } from "react";
import apikey from "./../keys.js";

export default function AuthorDetail() {
  const [portfolio, setPortfolio] = useState(null);
  const [images, setImages] = useState(null);

  const getAuthorPortfo = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/users?page=1&query=nas&client_id=${apikey}&per_page=1`
    );
    const data = await response.json();
    console.log(data.results);
    
    setPortfolio(data.results);
  };

  const getImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${portfolio && portfolio[0]?.username}/photos?client_id=${apikey}`
    );
    const data = await response.json();
    console.log(data);
    setImages(data); 
  };

  useEffect(() => {
    getAuthorPortfo();
  }, []);

  useEffect(() =>{
    getImages();
  },[portfolio])

  return (
    <>
      {portfolio ? (
        <>
          {portfolio.map((user) => {
            return (
              <div className="portoflio-container" key={user.id}>
                <div className="portfolio">
                  <h2>
                    Welcome to {user.first_name} {user.last_name}'s Portfolio
                  </h2>
                  <div className="user_info">
                    <p>
                      <strong>Author name:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Username:</strong> {user.username}
                    </p>
                    <img src={user.profile_image.large} alt="" />
                  </div>
                  <a href={user.links.followers}>Followers</a> <br />
                  <a href={user.links.photos}>More photos to inspiration</a>
                  <p>
                    <strong>Total likes: </strong>
                    {user.total_likes}
                  </p>
                </div>

                <h3> {user.username}'s works</h3>
                <div className="portfolio_photos">
                  {images?.map((image) => {
                    return (
                      <div key={image.id}>
                        <img src={image.urls.small} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>Loading author details...</p>
      )}
    </>
  );
}
