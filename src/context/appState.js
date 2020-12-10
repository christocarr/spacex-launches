import { useState, useEffect, useReducer } from 'react';
import AppContext from './appContext';
import reducer from './appReducer';
import { RELOAD_DATA, FILTER_DATA, SORT_DATA } from './appActions';

function AppState({ children }) {
	const initialState = {
		launchData: [],
		isLoading: false,
		error: '',
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	//Reload launch data
	const reloadData = (data) => {
		dispatch({
			type: RELOAD_DATA,
			payload: data,
		});
	};

	//Filter launch data
	const filterData = (launchYear) => {
		dispatch({
			type: FILTER_DATA,
			payload: launchYear,
		});
	};

	//Sort launch data
	const sortData = () => {
		dispatch({
			type: SORT_DATA,
			payload: state.launchData,
		});
	};

	//Fetch launch data
	const fetchData = async () => {
		try {
			const res = await fetch('https://api.spacexdata.com/v3/launches');
			const data = await res.json();
			reloadData(data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				state,
				fetchData,
				reloadData,
				filterData,
				sortData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppState;
