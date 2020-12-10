import { RELOAD_DATA, FILTER_DATA, SORT_DATA } from './appActions';

const reducer = (state, action) => {
	switch (action.type) {
		case RELOAD_DATA:
			return {
				...state,
				launchData: action.payload,
			};
		case FILTER_DATA:
			return {};
		case SORT_DATA:
			return {
				...state,
				launchData: action.payload.sort((a, b) =>
					a.launch_date_unix < b.launch_date_unix ? 1 : -1
				),
			};
		default:
			return state;
	}
};

export default reducer;
