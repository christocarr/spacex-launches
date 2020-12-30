import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/appContext';
function LaunchPage() {
	const { state } = useContext(AppContext);

	let { id } = useParams();

	const [launchItem, setLaunchItem] = useState({
		flight_number: '',
		mission_name: '',
		launch_date_unix: 10000,
		launch_site: {
			site_name_long: '',
		},
		rocket: {
			rocket_name: '',
			rocket_type: '',
		},
		launch_success: true,
		details: '',
	});

	useEffect(() => {
		id = Number(id);
		const chosenItem = state.launchData.filter(
			(item) => item.flight_number === id
		);
		setLaunchItem(chosenItem[0]);
	}, []);

	console.log(launchItem);

	return (
		<div className="wrapper">
			<div className="launch__page_item">
				<div className="launch__page_item-header">
					<h3>{`#${launchItem.flight_number} ${launchItem.mission_name}`}</h3>
					<p className="launch_date">
						{new Intl.DateTimeFormat('en-GB', {
							dateStyle: 'medium',
							// weekday: 'narrow',
							// month: 'short',
							// year: 'numeric',
						}).format(launchItem.launch_date_unix * 1000)}
					</p>
				</div>
				<p>Launch site: {launchItem.launch_site.site_name_long}</p>
				<p>
					Rocket name: {launchItem.rocket.rocket_name} Rocket type:{' '}
					{launchItem.rocket.rocket_type}
				</p>
				<p>{launchItem.details}</p>
				{!launchItem.launch_success && (
					<p>Reason: {launchItem.launch_failure_details.reason}.</p>
				)}
			</div>
		</div>
	);
}

export default LaunchPage;
