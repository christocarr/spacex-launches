import { useContext, useState } from 'react';
import AppContext from '../context/appContext';
import selectSm from '../assets/icon/select.png';
import selectMd from '../assets/icon/select@2x.png';
import selectLg from '../assets/icon/select@3x.png';

function Filter() {
	const { filterData, state } = useContext(AppContext);

	const { launchData } = state;

	const [optionOpen, setOptionOpen] = useState(false);

	//Get all the years from launchData
	let launchYears = new Set();
	launchData.forEach((item) => launchYears.add(item.launch_year));
	launchYears = [...launchYears];
	//sort years by ascending order
	const sortedYears = launchYears.sort((a, b) => (a > b ? 1 : -1));

	const onYearSelect = (year) => {
		setOptionOpen(!optionOpen);
		filterData(year);
	};

	return (
		<div className="filter__container">
			<button
				className="filter_button"
				onClick={() => setOptionOpen(!optionOpen)}
			>
				Filter by Year
				<img
					srcSet={`
        ${selectSm} 1x,
        ${selectMd} 2x,
        ${selectLg} 3x
      `}
					src={selectSm}
					alt="select"
				/>
			</button>
			{optionOpen && (
				<ul className="filter__list">
					{sortedYears.map((year) => (
						<li
							className="filter__list_item"
							onClick={() => onYearSelect(year)}
							key={year}
						>
							{year}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Filter;
