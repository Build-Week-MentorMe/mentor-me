import React from "react";
import Header from "./header/Header";
import "../styles/Styles.scss";
import Landing from "./body/Landing";
import RegisterUser from "./Register/RegisterUser";
import Login from "./body/login/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import Feed from "./feed/Feed";
import DummyRoute from "./dummy/DummyRoute";
import QuestionAdd from "./feed/QuestionAdd";
import QuestionEdit from "./feed/QuestionEdit";
const App = () => {
  return (
    <div>
      <Header />

      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={RegisterUser} />
      <Route path="/signin" component={Login} />
      <PrivateRoute path="/user-feed" component={Feed} />
      <Route path="/dummy-route" component={DummyRoute} />
      <PrivateRoute path="/user-feed/add" component={QuestionAdd} />
      <PrivateRoute path="/user-feed/edit" component={QuestionEdit} />
    </div>
  );
};

export default App;
