import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowMagic from "./components/ShowMagic";
import Posts from './pages/Posts'
import Posttest from "./pages/Posttest";

function App() {

  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={ShowMagic} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/showposts" component={Posttest} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        

      </Switch>
    </BrowserRouter>
  );
}

export default App;
