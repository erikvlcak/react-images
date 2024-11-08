/* eslint-disable react/prop-types */
export default function ImageDetails({ detailImg, showDetailImg, setShowDetailImg }) {
  return (
    <div>
      <div>Detail:</div>
      <div onClick={() => setShowDetailImg(!showDetailImg)}>Close detail</div>
      <img src={detailImg} alt="" />
    </div>
  );
}
