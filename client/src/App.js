import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import {useContext} from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
    <Topbar/>
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/register">{user ? <Home/> : <Register/>}</Route>
        <Route path="/login">{user ? <Home/> :<Login/>}</Route>
        <Route path="/write">{user ? <Write/>: <Write/>}</Route> 
        <Route path="/settings">{user ? <Setting/>: <Register/>}</Route>
        <Route path="/post/:postId">
             <Single/>
        </Route>

    </Switch>
    
    
    
    </Router>
  );
}

export default App;
