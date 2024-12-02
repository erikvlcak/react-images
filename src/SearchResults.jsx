/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ig_icon from "./assets/icons8-instagram.svg";

export default function SearchResults({ images, keyword, setDetailImg, showDetailImg, setShowDetailImg }) {
  return (
    <div>
      {images && (
        <div>
          {keyword === "nature" ? (
            <div className="result-header">Look at these images in the meantime...</div>
          ) : (
            <div className="result-header">List of images about {keyword}</div>
          )}

          <div className="search-results">
            {images.map((item) => {
              return (
                <div className="homepage__results" key={item.id}>
                  <div className="profile">
                    <div>Author</div>
                    <img className="profile__img-author" src={item.user.profile_image.large} alt="" />
                    <div>{item.user.name}</div>
                    {item.user.social.instagram_username && (
                      <a href={`https://www.instagram.com/${item.user.social.instagram_username}/`}>
                        <img src={ig_icon} alt="intagram link" /> {item.user.social.instagram_username}
                      </a>
                    )}

                    <Link to={"/author/" + item.user.username}>
                      <button className="button">View {item.user.first_name}&apos;s portfolio</button>
                    </Link>
                  </div>
                  {/* <div>{item.description}</div> */}
                  <img
                    onClick={() => {
                      console.log("clicked image");
                      console.log(showDetailImg);
                      setShowDetailImg(true);
                      setDetailImg(item);
                    }}
                    className="img__result"
                    src={item.urls.full}
                    alt={item.alt_description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
