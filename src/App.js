import AppState from '../src/context/appState';
import Header from './components/Header';
import LaunchList from './components/LaunchList';
import imgSm from './assets/img/launch-home.png';
import imgMd from './assets/img/launch-home@2x.png';
import imgLg from './assets/img/launch-home@3x.png';

function App() {
	return (
		<div>
			<AppState>
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
					<LaunchList />
				</main>
			</AppState>
		</div>
	);
}

export default App;
