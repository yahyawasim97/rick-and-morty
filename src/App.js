import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/characters" component={CharactersPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
