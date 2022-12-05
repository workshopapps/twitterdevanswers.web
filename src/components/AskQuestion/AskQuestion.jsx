import React, { useState } from 'react';
import Asks from '../Asks';

function AskQuestion() {
	const [show, setShow] = useState(false);

	function showShareModal() {
		setShow(true);
	}

	function hideShareModal() {
		setShow(false);
	}

	const showShare = () => showShareModal();
	const hideShare = () => hideShareModal();

	return (
		<Asks
			onClose={hideShare}
			show={show}
			hide={hideShare}
			showShare={showShare}
		/>
	);
}

export default AskQuestion;
