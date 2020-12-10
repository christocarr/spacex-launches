import { useState, useEffect, useReducer, useContext } from 'react';
import AppState from '../src/context/appState';
import Header from './components/Header';
import LaunchList from './components/LaunchList';
import imgSm from './assets/img/launch-home.png';
import imgMd from './assets/img/launch-home@2x.png';
import imgLg from './assets/img/launch-home@3x.png';

// const initialState = {
// 	data: [],
// };

// const reducerFunction = (state, action) => {
// 	switch (action.type) {
// 		case 'reloadData':
// 			return {
// 				...state,
// 				data: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

function App() {
	// const [data, setData] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState('');

	// const [state, dispatch] = useReducer(reducerFunction, initialState);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsLoading(true);

	// 		try {
	// 			const res = await fetch('https://api.spacexdata.com/v3/launches');
	// 			const data = await res.json();
	// 			setData(data);
	// 			dispatch({ type: 'reloadData', payload: data });
	// 		} catch (error) {
	// 			setError(error);
	// 		}

	// 		setIsLoading(false);
	// 	};

	// 	fetchData();
	// }, []);

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
					{/* <LaunchList data={state.data} /> */}
					<LaunchList />
				</main>
			</AppState>
		</div>
	);
}

export default App;
