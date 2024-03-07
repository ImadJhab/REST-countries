import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header"
import Filter from './components/filter'
import Country from "./components/country";

function App() {
  return (
    <Router>
      <>
        <Header/>
        <Route exact path="/">
          <Filter />
        </Route>
        <Route path="/countries/:name"  children={<Country />}>
        </Route>
      </>  
    </Router>
  );
}

export default App;
