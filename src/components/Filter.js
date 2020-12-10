import selectSm from '../assets/icon/select.png';
import selectMd from '../assets/icon/select@2x.png';
import selectLg from '../assets/icon/select@3x.png';

function Filter() {
	return (
		<button className="filter_button">
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
	);
}

export default Filter;
