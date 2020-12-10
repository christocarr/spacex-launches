function LaunchItem({ item }) {
	return (
		<li className="launch_item">
			<p className="launch_number">#{item.flight_number}</p>
			<div className="launch_name">
				<p>{item.mission_name}</p>
			</div>

			<div className="details_container">
				<p className="launch_date">
					{new Intl.DateTimeFormat('en-GB', {
						weekday: 'short',
						month: 'short',
						year: 'numeric',
					}).format(item.launch_date_unix * 1000)}
				</p>
				<p className="rocket_id">{item.rocket.rocket_id}</p>
			</div>
		</li>
	);
}

export default LaunchItem;
// 24th Mar 2007
