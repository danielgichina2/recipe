import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './new-recipe.css';
import { useState } from 'react';
import axios from 'axios';

function New() {
     //set form data
  const[recipeData, setRecipeData]=useState({});

  const handleChange=(e)=>{
    setRecipeData({...recipeData,[e.target.name]:e.target.value});
  };

  //handle submit recipe data
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/add',recipeData).then((response)=>{
      alert(response.data);

    }).catch((error)=>{
      console.log(error)

    });
}
    return (
        <div class="new-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ingredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="Ingredients" name="ingredients" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="description" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default New;