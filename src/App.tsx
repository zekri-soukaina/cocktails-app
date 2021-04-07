import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alcoholic from "./Pages/Alcoholic";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import ListCocktails from "./Pages/ListCocktails";
import NoAlcoholic from "./Pages/NoAlcoholic";
import ListCategories from "./Pages/ListCategories";
import MenuPage from "./Pages/MenuPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/noalcoholic" component={NoAlcoholic} />
        <Route path="/alcoholic" component={Alcoholic} />

        <Route path="/list/:searchText+" component={ListCategories} />
        <Route path="/list" component={ListCocktails} />
        <Route path="/cocktail_info/:idDrink" component={MenuPage} />
        <Route path="/category/:searchText?" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
