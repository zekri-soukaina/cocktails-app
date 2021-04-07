import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export type Drinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};
type Props = {
  drink: Drinks;
};
export default function CocktailCard({ drink }: Props) {
  return (
    <div style={{ margin: "20px" }} key={drink.idDrink}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </Card.Text> */}
          <Link to={`/cocktail_info/${drink.idDrink}`}>
            <Button variant="primary">Let's make it happen</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
