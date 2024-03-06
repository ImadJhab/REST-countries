import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Countries from "./components/countries"
import Country from "./components/country"
import Error from "./components/error"
import Header from "./components/header"

function App() {
	return (
		<Router>
      <main className="bg-gray-100 dark:bg-gray-900">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Countries />
          </Route>
          <Route path="/:capital" children={<Country />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
	)
}
export default App
