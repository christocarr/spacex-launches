import { useContext } from 'react';
import AppContext from '../context/appContext';
import logo from '../assets/spacex-logo.png';
import refreshSm from '../assets/icon/refresh.png';
import refreshMd from '../assets/icon/refresh@2x.png';
import refreshLg from '../assets/icon/refresh@3x.png';

function Header() {
	const { fetchData } = useContext(AppContext);
	return (
		<header className="header">
			<div className="logo_container">
				<img className="logo" src={logo} alt="logo" />
				<h1>launches</h1>
			</div>
			<button className="reload__button" onClick={fetchData}>
				Reload Data
				<img
					className="reload_icon"
					srcSet={`
					${refreshSm} 1x,
					${refreshMd} 2x,
					${refreshLg} 3x
					`}
					src={refreshSm}
					alt="reload data"
				/>
			</button>
		</header>
	);
}

export default Header;
