import { useContext } from 'react';
import AppContext from '../context/appContext';
import Sort from './Sort';
import LaunchItem from './LaunchItem';
import Filter from './Filter';

function LaunchList() {
	const { state } = useContext(AppContext);

	return (
		<ul className="launch__list_container">
			<div className="filter-sort__container">
				<Sort />
				<Filter />
			</div>

			{state.launchData.map((item) => (
				<LaunchItem key={item.mission_name} item={item} />
			))}
		</ul>
	);
}

export default LaunchList;
