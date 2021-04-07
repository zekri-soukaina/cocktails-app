import axios from "axios";
import React, { useEffect, useState } from "react";
import CocktailCard, { Drinks } from "../Components/CocktailCard";
import NavBar from "../Components/NavBar";

export default function NoAlcoholic() {
  const [listCocktails, setListCocktails] = useState<Drinks[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
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
        No Alcoholic &#127865; &#129481;{" "}
      </h2>
      <p style={{ margin: "10px", color: "darkblue" }}>
        we found for you {listCocktails.length} drink
      </p>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
        }}>
        {listCocktails.length ? (
          listCocktails.map((drink, index) => {
            return <CocktailCard key={index} drink={drink} />;
          })
        ) : (
          <h1> &#127865; &#129481;... </h1>
        )}
      </div>
    </div>
  );
}
