import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

type CocktailData = {
  idDrink?: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed?: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass?: string;
  strIBA?: string;

  strImageAttribution?: string;
  strImageSource?: string;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;

  strInstructions?: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
};
export default function MenuPage() {
  const routeParams = useParams<{ idDrink: string }>();
  const id = routeParams.idDrink;

  const [infoCocktail, setInfoCocktail] = useState<CocktailData[]>();

  useEffect(() => {
    const fetchData = async () => {
      const param = encodeURIComponent(id);
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${param}`
      );
      console.log(response.data.drinks);
      setInfoCocktail(response.data.drinks);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage:
            "url(https://makemeacocktail.com/blog/wp-content/uploads/2019/02/a1.jpg)",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}>
        <h1>Enjoy Cocktails party!</h1>
        <p>
          A cocktail is an alcoholic mixed drink, which is either a combination
          of spirits, or one or more spirits mixed with other ingredients such
          as fruit juice, flavored syrup, or cream..
        </p>
        <p>
          <Link to="/">
            <Button variant="outline-light" style={{ backgroundColor: "red" }}>
              Cocktails &#127865;
            </Button>
          </Link>
        </p>
      </Jumbotron>

      {infoCocktail ? (
        <Card
          style={{
            width: "20rem",
            marginLeft: "40%",
          }}
          key={infoCocktail[0].idDrink}>
          <Card.Body>
            <Card.Title>{infoCocktail[0].strDrink} </Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={infoCocktail[0].strDrinkThumb} />
          {/* <Card.Body>
            <Card.Title>{infoCocktail[0].strImageAttribution}</Card.Title>
            <Card.Img variant="top" src={infoCocktail[0].strImageSource} />
          </Card.Body> */}

          <ListGroup className="list-group-flush">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {infoCocktail[0].strCategory}{" "}
                <em style={{ color: "red" }}>
                  {" "}
                  {infoCocktail[0].strAlcoholic}{" "}
                </em>
              </Card.Title>
            </Card.Body>
          </ListGroup>

          <Card.Body>
            <Card.Title>Ingredient({infoCocktail[0].strGlass})</Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            {infoCocktail[0].strIngredient1 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure1} {infoCocktail[0].strIngredient1}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient2 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure2} {infoCocktail[0].strIngredient2}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient3 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure3} {infoCocktail[0].strIngredient3}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient4 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure4} {infoCocktail[0].strIngredient4}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient5 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure5} {infoCocktail[0].strIngredient5}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient6 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure6} {infoCocktail[0].strIngredient6}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient7 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure7} {infoCocktail[0].strIngredient7}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient8 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure8} {infoCocktail[0].strIngredient8}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient9 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure9} {infoCocktail[0].strIngredient9}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient10 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure10} {infoCocktail[0].strIngredient10}
              </ListGroupItem>
            ) : null}

            {infoCocktail[0].strIngredient11 !== null ? (
              <ListGroupItem>
                {infoCocktail[0].strMeasure11} {infoCocktail[0].strIngredient11}
              </ListGroupItem>
            ) : null}
          </ListGroup>
          <Card.Body>
            <Card.Text>{infoCocktail[0].strInstructions}</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
}
