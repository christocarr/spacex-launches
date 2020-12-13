import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header';
import AppContext from './context/appContext';

describe('<Header />', () => {
	it('renders a button', () => {
		const { getByRole } = render(
			<AppContext.Provider value={false}>
				<Header />
			</AppContext.Provider>
		);

		const reloadButton = getByRole('button');
		expect(reloadButton).toBeInTheDocument();
	});
});
