import { useContext } from 'react';
import AppContext from '../context/appContext';
import Sort from './Sort';
import LaunchItem from './LaunchItem';
import Filter from './Filter';

function LaunchList() {
	const { state } = useContext(AppContext);

	const { launchData, selectedYear, sortType, isLoading } = state;

	const items = launchData
		.sort((a, b) =>
			sortType === 'Ascending'
				? a.launch_date_local > b.launch_date_local
					? 1
					: -1
				: a.launch_date_local < b.launch_date_local
				? 1
				: -1
		)
		.filter((item) => {
			if (selectedYear === '') {
				return item;
			} else {
				return item.launch_year === selectedYear;
			}
		});

	return (
		<ul className="launch__list_container">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="filter-sort__container">
						<Sort />
						<Filter />
					</div>
					{items.map((item) => (
						<LaunchItem key={item.mission_name} item={item} />
					))}
				</>
			)}
		</ul>
	);
}

export default LaunchList;
