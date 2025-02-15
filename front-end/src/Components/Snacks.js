import React, { useState, useEffect } from "react";
import axios from "axios";
import Snack from "../Components/Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data.payload);
        // console.log(snacks);
      })
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <div >
      <section className="snack-container">
        {snacks.map((snack) => (
          <Snack key={snack.id} snack={snack} />
        ))}
      </section>
    </div>
  );
}

export default Snacks;
