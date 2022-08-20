import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (


    <>
      <h2>
          {" "}
          { snackHealth
            ? "This Snack is Healthy!"
            : "This Snack is Unhealthy!" }
          {" "}
        </h2>
      {snackHealth 
          ? <span> <img src={heartSolid}></img> </span> 
          : <span> <img src={heartOutline}></img> </span>}
    </>
  );
}

export default HeartHealth;
