import React from 'react';
import Navigation from './components/navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';


function App() {

	const user = {
		firstName: 'Nikolai',
		lastName: 'Coder'
	}

  return (
		<div>
			<Navigation user={user} />
			<Switch>
				<Route path="/:page" component={PageRenderer} />
				<Route path="/" component={() => <Redirect to="/home" />} />
				<Route component={() => 404} />
			</Switch>
		</div>
  );
}

export default App;
