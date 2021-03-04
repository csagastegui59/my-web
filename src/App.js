import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Navbar} path='/navbar' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
