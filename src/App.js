import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Sheet from "./components/Sheet/Sheet";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route
							exact
							path="/"
							render={props => <Home {...props} />}
						/>
						<Route
							path="/sheet/:id"
							render={props => <Sheet {...props} />}
						/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
