import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Lodash from "./components/Lodash";
import Lodash2 from "./components/Lodash2";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Todo from "./components/todo/Todo";
import TodoDetail from "./components/todo/Detail";
import TodoRegister from "./components/todo/Register";
import Css from "./components/css/Css";

import Form from "./components/Form";
import Callback from "./components/callback/Callback";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/todo/new" component={TodoRegister} />
        <Route path="/todo/:id" component={TodoDetail} />
        <Route path="/lodash" component={Lodash} />
        <Route path="/lodash2" component={Lodash2} />
        <Route path="/posts" component={Post} />
        <Route path="/post/new" component={Form} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/css" component={Css} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
