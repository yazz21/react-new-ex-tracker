import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

import Nav from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" component={ExerciseList} exact />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
