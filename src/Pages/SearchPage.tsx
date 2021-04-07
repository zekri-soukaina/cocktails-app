import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CocktailCard, { Drinks } from "../Components/CocktailCard";
import NavBar from "../Components/NavBar";

export default function SearchPage() {
  const routeParams = useParams<{ searchText: string }>();
  let searchCategory = routeParams.searchText;
  console.log("searchCategory", searchCategory);
  if (searchCategory.indexOf(" ") >= 0) {
    searchCategory = searchCategory.replace(/ /g, "_");
  }
  //  else if (/(\\|\/)+/gi.test(searchCategory)) {
  //   searchCategory = searchCategory.replace(/(\\|\/)+/gi, "_");
  // }

  const category = encodeURIComponent(searchCategory);
  console.log("category", category);
  const [listCocktails, setListCocktails] = useState<Drinks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`
      );
      console.log(response.data.drinks);
      setListCocktails(response.data.drinks);
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <NavBar />
      <h2 style={{ margin: "10px", color: "darkblue" }}>
        research for <strong>{searchCategory}</strong> &#127870;
      </h2>
      <p style={{ margin: "10px", color: "darkblue" }}>
        page contient {listCocktails.length} drinks
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
          <h1> &#127870;... </h1>
        )}
      </div>
    </div>
  );
}
