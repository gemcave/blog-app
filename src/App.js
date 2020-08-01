import React from 'react';
import Navigation from './components/navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';

function App() {
  return (
		<div>
			<Navigation />
			<Switch>
				<Route path="/:page" component={PageRenderer} />
				<Route path="/" component={() => <Redirect to="/home" />} />
				<Route component={() => 404} />
			</Switch>
		</div>
  );
}

export default App;
