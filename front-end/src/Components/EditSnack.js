import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/stylin.css"
const API = process.env.REACT_APP_API_URL;

function EditSnack() {
  const { id } = useParams()
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
   name: "",
   fiber: "",
   protein: "",
   added_sugar: "",
   is_healthy: false,
   image: "",
  });

  useEffect(()=> {
    axios.get(`${API}/snacks/${id}`)
    .then(res => setSnack(res.data.payload))
    .catch(err => console.error(err)) 
  }, [id, navigate])
  
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: Number(event.target.value),
    });
  };

  const editSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    editSnack(snack);
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit} className="edit">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          required
          value={snack.fiber}
          placeholder="Fiber Count"
          onChange={handleNumberChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          placeholder="Protein Count"
          onChange={handleNumberChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="added_sugar"
          value={snack.added_sugar}
          placeholder="Sugar Count"
          onChange={handleNumberChange}
        />
        <label htmlFor="image">Image url:</label>
        <input
          id="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />
        <br />
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
        <input type="submit" />
      </form>
    </div>
  );
}

export default EditSnack