import { useEffect, useReducer } from 'react';
import AppContext from './appContext';
import reducer from './appReducer';
import {
	RELOAD_DATA,
	FILTER_DATA,
	SORT_DATA,
	SET_ERROR,
	SET_LOADING,
} from './appActions';

function AppState({ children }) {
	const initialState = {
		launchData: [],
		selectedYear: '',
		sortType: 'Ascending',
		isLoading: false,
		error: '',
	};

	const [state, dispatch] = useReducer(reducer, initialState);

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
	const sortData = (sortType) => {
		dispatch({
			type: SORT_DATA,
			payload: sortType,
		});
	};

	//Set error message
	const setError = (error) => {
		dispatch({
			type: SET_ERROR,
			payload: error,
		});
	};

	//Toggle loading
	const setLoading = (loading) => {
		dispatch({
			type: SET_LOADING,
			payload: loading,
		});
	};

	//Fetch launch data
	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await fetch('https://api.spacexdata.com/v3/launches');
			const data = await res.json();
			reloadData(data);
			filterData('');
			setLoading(false);
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
