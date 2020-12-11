import {
	RELOAD_DATA,
	FILTER_DATA,
	SORT_DATA,
	SET_ERROR,
	SET_LOADING,
} from './appActions';

const reducer = (state, action) => {
	switch (action.type) {
		case RELOAD_DATA:
			return {
				...state,
				launchData: action.payload,
			};
		case FILTER_DATA:
			return {
				...state,
				selectedYear: action.payload,
			};
		case SORT_DATA:
			return {
				...state,
				sortType: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
