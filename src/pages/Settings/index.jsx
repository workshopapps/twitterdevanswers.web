import React from 'react';

import SettingsList from '../../components/SettingsList/index';
import SettingsCSS from './style.module.css';
import SettingHeader from '../../components/SettingsHeader/SettingHeader';

function App() {
	return (
		<div>
			<div className={SettingsCSS.settingscontainer}>
				<SettingHeader />
				<SettingsList />
			</div>
		</div>
	);
}

export default App;
