import { useEffect, useState } from "react";
import apikey from "./../keys.js";
import { useParams } from "react-router-dom";

export default function AuthorDetail() {
    const [images, setImages] = useState(null);
    const [user, setUser] = useState(null);
    const { username } = useParams();  

    const getAuthorPortfo = async () => {
        const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${apikey}`);
        const data = await response.json();
        console.log(data);
        setUser(data);
    }

    const getImages = async () => {
        const response = await fetch(
            `https://api.unsplash.com/users/${
            user && user.username
            }/photos?client_id=${apikey}`
        );

        const data = await response.json();
        setImages(data);
    }

    useEffect(() => {
        getAuthorPortfo();
    }, [username]);

    useEffect(() => {
        getImages();
    }, [user]);

    return (
      <>
        {user ? (
          <>
            <div className="portfolio" key={user.id}>
              <h2>Welcome to {user.name}'s Portfolio</h2>
              <div className="user_info">
                <img src={user.profile_image.large} alt="" />
                <div className="portfolio_name">
                  <p>
                    <strong>Author name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p>
                    <strong>Bio:</strong> {user.bio}
                  </p>
                  <p>
                    <strong>Downloads:</strong> {user.downloads}
                  </p>
                  <p>
                    <strong>Total likes: </strong>
                    {user.total_likes}
                  </p>
                </div>
              </div>
            </div>

            <h3> {user.name}'s works</h3>
            <div className="portfolio_photos">
              {images.map((image) => {
                return (
                  <div key={image.id}>
                    <img src={image.urls.small} alt="" />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );

}
