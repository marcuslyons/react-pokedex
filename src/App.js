import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <header>
            <h1>Welcome ! </h1>
            <p>View the original 151 Pokemon below:</p>
          </header>
          <section>
            <Switch>
              <Route exact path="/">
                <ul className="App-list">
                  <Pokemons />
                </ul>
              </Route>
              <Route path="/:id">
                <Pokemon />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
