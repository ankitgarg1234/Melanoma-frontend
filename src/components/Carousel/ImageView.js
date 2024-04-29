import React from "react";
import { useLocation, Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// <div style={{ alignSelf: "flex-start", margin: "20px" }}>
//   <Link to="/" style={{ display: "inline-block" }}>
//     <FaArrowLeft /> Back
//   </Link>
// </div>;
const ImageView = () => {
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const clickedImage = queryParams.get("clickedImage");
  const firstImage = queryParams.get("firstImage");
  const goBack = () => {
    window.history.back();
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ alignSelf: "flex-start", margin: "20px" }}>
        <button
          onClick={goBack}
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "18px",
            padding: "10px 15px",
          }}
        >
          <FaArrowLeft style={{ marginRight: "5px", fontSize: "20px" }} /> Back
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <h2>Oiginal Image</h2>
          <img
            src={firstImage}
            alt="ClickedImage"
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
          />
        </div>
        <div>
          <h2>Filtered Image</h2>
          <img
            src={clickedImage}
            alt="FirstImage"
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;
