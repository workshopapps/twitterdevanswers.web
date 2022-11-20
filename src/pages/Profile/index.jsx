import React from 'react';
import Section1 from './components/Section1/index';
import Section2 from './components/Section2/index';
import Profile from './index.module.css';

function App() {
	return (
		<div className={Profile}>
			<Section1 />
			<Section2 />
		</div>
	);
}

export default App;
