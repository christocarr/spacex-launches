import { useContext } from 'react';
import AppContext from '../context/appContext';
import sortSm from '../assets/icon/sort.png';
import sortMd from '../assets/icon/sort@2x.png';
import sortLg from '../assets/icon/sort@3x.png';

function Sort() {
	const { sortData } = useContext(AppContext);

	return (
		<button className="sort_button" onClick={sortData}>
			Sort Descending
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
