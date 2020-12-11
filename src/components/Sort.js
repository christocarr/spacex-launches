import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/appContext';
import sortSm from '../assets/icon/sort.png';
import sortMd from '../assets/icon/sort@2x.png';
import sortLg from '../assets/icon/sort@3x.png';

function Sort() {
	const { sortData } = useContext(AppContext);
	const [sortType, setSortType] = useState('Ascending');

	useEffect(() => {
		setSortType(sortType === 'Ascending' ? 'Descending' : 'Ascending');
		sortData(sortType);
	}, []);

	//change button text when  clicked and set sort
	const handleSort = () => {
		if (sortType === 'Ascending') {
			setSortType('Descending');
		} else {
			setSortType('Ascending');
		}
		sortData(sortType);
	};

	return (
		<button className="sort_button" onClick={handleSort}>
			Sort {sortType}
			<img
				srcSet={`
        ${sortSm} 1x,
        ${sortMd} 2x,
        ${sortLg} 3x
      `}
				src={sortSm}
				alt="sort"
			/>
		</button>
	);
}

export default Sort;
