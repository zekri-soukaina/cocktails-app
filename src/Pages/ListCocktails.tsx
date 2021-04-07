import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

type Category = {
  strCategory: string;
};
export default function ListCocktails() {
  const [listCocktails, setListCocktails] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log(response.data.drinks);
      setListCocktails(response.data.drinks);
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <h2 style={{ margin: "10px", color: "darkblue" }}>
        Category List &#129347; &#129346; &#127866;{" "}
      </h2>
      <ListGroup
        variant="flush"
        style={{ textAlign: "center", color: "darkblue", marginTop: "30px" }}>
        {listCocktails.length ? (
          listCocktails.map((drinks, index) => {
            return (
              <Link key={index} to={`/list/${drinks.strCategory}`}>
                <ListGroup.Item>{drinks.strCategory}</ListGroup.Item>
              </Link>
            );
          })
        ) : (
          <h1> &#129347; &#129346; &#127866; ... </h1>
        )}
      </ListGroup>
    </div>
  );
}
