import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <MainLayout>
          <Switch>
            <Route path="/characters" component={CharactersPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </MainLayout>
      </Provider>
    </Router>
  );
};

export default App;
