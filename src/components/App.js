import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
