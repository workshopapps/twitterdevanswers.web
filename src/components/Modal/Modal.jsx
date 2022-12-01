import React from 'react';
import { GrClose } from 'react-icons/gr';
import styles from './Modal.module.css';

function Modal({ onClose, hide }) {
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			hide();
		}
	}

	return (
		<div
			onClick={onClose}
			onKeyPress={handleKeyPress}
			className={
				show
					? {`${styles.modal} ${styles.showModal}`}
					..: {`${styles.modal} ${styles.hideModal}`}
			}
		>
			<section
				className={styles.modalMain}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.modalHeader}>
					<p>Connect Wallet</p>
					<GrClose onClick={hide} className={styles.closeModal} />
				</div>
				<div className={styles.modalBody}></div>
			</section>
		</div>
	);
}

export default Modal;
