import React, { useRef, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import {
	FaFacebookSquare,
	FaLinkedin,
	FaPinterestSquare,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ onClose, show, hide }) {
	const facebookRef = useRef(null);
	const linkedinRef = useRef(null);
	const pinterestRef = useRef(null);
	const twitterRef = useRef(null);
	const whatsappRef = useRef(null);

	useEffect(() => {
		const facebookBtn = facebookRef.current;
		const linkedinBtn = linkedinRef.current;
		const pinterestBtn = pinterestRef.current;
		const twitterBtn = twitterRef.current;
		const whatsappBtn = whatsappRef.current;

		function init() {
			const facebookPostUrl = encodeURI(facebookBtn.href);
			const linkedinPostUrl = encodeURI(linkedinBtn.href);
			const pinterestPostUrl = encodeURI(pinterestBtn.href);
			const twitterPostUrl = encodeURI(twitterBtn.href);
			const whatsappPostUrl = encodeURI(whatsappBtn.href);

			facebookBtn.setAttribute(
				'href',
				`https://www.facebook.com/sharer.php?u=${facebookPostUrl}`
			);

			linkedinBtn.setAttribute(
				'href',
				`https://www.linkedin.com/shareArticle?url=${linkedinPostUrl}`
			);

			pinterestBtn.setAttribute(
				'href',
				`https://pinterest.com/pin/create/bookmarklet/?url=${pinterestPostUrl}`
			);

			twitterBtn.setAttribute(
				'href',
				`https://twitter.com/share?url=${twitterPostUrl}`
			);

			whatsappBtn.setAttribute(
				'href',
				`https://api.whatsapp.com/send?text=${whatsappPostUrl}`
			);
		}

		init();
	}, []);

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
					? `${styles.modal} ${styles.showModal}`
					: `${styles.modal} ${styles.hideModal}`
			}
			role="button"
			tabIndex={0}
		>
			<section
				className={styles.modalMain}
				onKeyPress={handleKeyPress}
				onClick={(e) => e.stopPropagation()}
				role="button"
				tabIndex={0}
			>
				<div className={styles.modalHeader}>
					<GrClose onClick={hide} className={styles.closeModal} />
				</div>
				<div className={styles.modalBody}>
					<a
						href=" "
						className={`${styles.socialShare} ${styles.facebook}`}
						ref={facebookRef}
					>
						<FaFacebookSquare />
					</a>
					<a
						href=" "
						className={`${styles.socialShare} ${styles.linkedin}`}
						ref={linkedinRef}
					>
						<FaLinkedin />
					</a>
					<a
						href=" "
						className={`${styles.socialShare} ${styles.pinterest}`}
						ref={pinterestRef}
					>
						<FaPinterestSquare />
					</a>
					<a
						href=" "
						className={`${styles.socialShare} ${styles.twitter}`}
						ref={twitterRef}
					>
						<FaTwitter />
					</a>
					<a
						href=" "
						className={`${styles.socialShare} ${styles.whatsapp}`}
						ref={whatsappRef}
					>
						<FaWhatsapp />
					</a>
				</div>
			</section>
		</div>
	);
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
};

export default Modal;
