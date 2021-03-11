import React from 'react';
import Card from 'react-bootstrap/Card'
import './Recipe.css';
import './mobile.css';  


const Recipe= ({title,calories,image,ingredients})=>{
    return(
        <Card className="Recipe" >
          <Card.Img src={image} />
          <Card.Body>
            <Card.Title className="title-recipe">{title}</Card.Title>
            <hr />
            <Card.Text>
              <ol>
                {ingredients.map(i=>(
                  <li>{i.text}</li>
                ))}
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
    );
}
export default Recipe