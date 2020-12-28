import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/appContext';
function LaunchPage() {
	const { state } = useContext(AppContext);

	let { id } = useParams();

	const [launchItem, setLaunchItem] = useState({
		mission_name: '',
	});

	useEffect(() => {
		id = Number(id);
		const chosenItem = state.launchData.filter(
			(item) => item.flight_number === id
		);
		setLaunchItem(chosenItem[0]);
	}, []);

	console.log(launchItem);

	return <div>{launchItem.mission_name}</div>;
}

export default LaunchPage;
