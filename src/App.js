import AppState from '../src/context/appState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LaunchList from './components/LaunchList';
import LaunchPage from './components/LaunchPage';
import imgSm from './assets/img/launch-home.png';
import imgMd from './assets/img/launch-home@2x.png';
import imgLg from './assets/img/launch-home@3x.png';

function App() {
	return (
		<AppState>
			<Router>
				<Header />
				<main>
					<div className="launch__image">
						<img
							srcSet={`
						${imgSm} 1x,
						${imgMd} 2x,
						${imgLg} 3x
					`}
							src={imgSm}
							alt="SpaceX launch"
						/>
					</div>
					<Switch>
						<Route exact path="/">
							<LaunchList />
						</Route>
						<Route path="/launch/:id">
							<LaunchPage />
						</Route>
					</Switch>
				</main>
			</Router>
		</AppState>
	);
}

export default App;
