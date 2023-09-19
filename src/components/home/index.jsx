import Table from "react-bootstrap/Table";
import "./home.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedRecipeContext } from "../../App";

function Home() {
  const navigate = useNavigate();

  const { selectedRecipe, setSelectedRecipe } = useContext(
    selectedRecipeContext
  );
  const [recipeData, setRecipeData] = useState([]);
  const [show, setShow] = useState(false);
  const [del, setDel] = useState();

  //get data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((response) => {
        setRecipeData(response.data);
      })
      .catch((err) => {
        console.log("Can not get data ", err);
      });
  }, []);

  //delete recipe
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((response) => {
        alert(response.data);
        setRecipeData(recipeData.filter((recipe) => recipe._id !== id));
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="home-container">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Recipe Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeData.map((recipe, index) => (
            <tr
              key={index}
              onDoubleClick={() => {
                setSelectedRecipe(recipe);
                navigate("view");
              }}
            >
              <td>{index + 1}</td>
              <td>{recipe.name}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    navigate(`edit`);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    setShow(true);
                    setDel(recipe._id);
                  }}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              handleDelete(del);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
