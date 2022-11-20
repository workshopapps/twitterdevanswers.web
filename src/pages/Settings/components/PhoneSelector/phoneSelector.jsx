import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './style.css';

function PhoneSelector() {
	const [value, setValue] = useState();
	return (
		<div>
			<PhoneInput
				id="numberInput"
				placeholder="Enter phone number"
				country="ng"
				value={value}
				onChange={setValue}
			/>
		</div>
	);
}

export default PhoneSelector;