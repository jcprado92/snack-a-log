import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <>
     <h4><span><img height="50px" width="50px" src={ snackHealth ? heartSolid : heartOutline} alt={snackHealth ? "healthy food" : "unhealthy food"} /> </span>{snackHealth
          ? "This Snack is Healthy!"
          : "This Snack is Unhealthy!"}{" "}</h4>
  <br/>
    </>
  );
}

export default HeartHealth;


