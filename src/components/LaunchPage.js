import { useParams } from 'react-router-dom';
function LaunchPage() {
	let { id } = useParams();

	return <div>Launch page {id}</div>;
}

export default LaunchPage;
