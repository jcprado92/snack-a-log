import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import HeartHealth from "./HeartHealth";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/stylin.css"
function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((err) => console.error("catch", err));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  // return (
  //   <article className="SnackDetails">
  //     <HeartHealth snackHealth={snack.is_healthy} />
  //       <img src={snack.image} alt={snack.name}></img>
  //     <h4>{snack.name}</h4>
  //     <div>
  //       <h5>Fiber: {snack.fiber}</h5>
  //       <h5>Protein: {snack.protein}</h5>
  //       <h5>Sugar: {snack.added_sugar} </h5>
  //     </div>
  //     <div className="showNavigation">
  //       <div>
  //         <Link to={`/snacks`}>
  //           <button>Back</button>
  //         </Link>
  //       </div>
  //       <div>
  //         <Link to={`/snacks/${id}/edit`}>
  //           <button>Edit</button>
  //         </Link>
  //       </div>
  //       <div>
  //         <button onClick={handleDelete}>Delete</button>
  //       </div>
  //     </div>
  //   </article>
  // );
  return (
    <div className="snack-details">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={snack.image} alt={snack.name} className="snack-image" />
        <Card.Body>
          <Card.Title>
            <h4>{snack.name}</h4>
          </Card.Title>
          <Card.Text>
            <HeartHealth snackHealth={snack.is_healthy} />
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>Fiber: {snack.fiber}</h5>
              <h5>Protein: {snack.protein}</h5>
              <h5>Sugar: {snack.added_sugar} </h5>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/snacks">
            <button>Back</button>
          </Card.Link>
          <Card.Link href={`/snacks/${id}/edit`}>
            <button>Edit</button>
          </Card.Link>
          <Card.Link>
            <button onClick={handleDelete}>Delete</button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SnackDetails;

{
  /* <Link to={`/snacks/${id}/edit`}>
  //           <button>Edit</button>
  //         </Link> */
}
