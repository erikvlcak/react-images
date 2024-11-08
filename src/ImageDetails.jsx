/* eslint-disable react/prop-types */
export default function ImageDetails({ detailImg, showDetailImg, setShowDetailImg }) {
  return (
    <>
      {showDetailImg && <div className="backdrop" onClick={() => setShowDetailImg(false)}></div>}
      <dialog open={showDetailImg} className="dialog">
        <div>{detailImg.description}</div>
        <div className="dialog__content">
          <img className="dialog__content-img" src={detailImg.urls.full} alt="" />
          <div className="dialog__content-details">
            <div className="dialog__name">Photo by {detailImg.user.name}</div>
            <div className="dialog__likes">{detailImg.likes} likes</div>
            <div>
              {" "}
              <a href={detailImg.links.download}>
                <button className="dialog__button">Download image</button>
              </a>{" "}
            </div>
            <div>
              <button className="dialog__button" onClick={() => setShowDetailImg(false)}>
                Close window
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
