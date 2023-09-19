import Table from "react-bootstrap/Table";
import "./view-recipe.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedRecipeContext } from "../../App";

function View() {
  const {selectedRecipe, setSelectedRecipe} = useContext(selectedRecipeContext);
  useEffect(() => {}, []);

  return (
    <div className="home-container">
      <Table striped bordered hover variant="light">
        <tbody>
          <tr>
            <th>Recipe Name</th>
            <td>{selectedRecipe?.name}</td>
          </tr>
          <tr>
            <th>Ingredients</th>
            <td>{selectedRecipe?.ingredients}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{selectedRecipe?.description}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default View;
