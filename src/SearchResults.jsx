/* eslint-disable react/prop-types */

import ig_icon from "./assets/icons8-instagram.svg";

export default function SearchResults({ images, keyword, setDetailImg, setShowDetailImg, showDetailImg }) {
  return (
    <div>
      {images && (
        <div>
          <h2>List of images about {keyword}</h2>
          {images.map((item) => {
            return (
              <div className="homepage__results" key={item.id}>
                <div className="profile">
                  <img className="profile__img-author" src={item.user.profile_image.large} alt="" />
                  <div>{item.user.name}</div>
                  <a href={`https://www.instagram.com/${item.user.social.instagram_username}/`}>
                    <img src={ig_icon} alt="intagram link" /> {item.user.social.instagram_username}
                  </a>
                  <button>View {item.user.first_name}&apos;s portfolio</button>
                </div>
                <div>{item.description}</div>
                <img
                  onClick={() => {
                    setShowDetailImg(!showDetailImg);
                    setDetailImg(item.urls.full);
                  }}
                  className="img__result"
                  src={item.urls.full}
                  alt={item.alt_description}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
