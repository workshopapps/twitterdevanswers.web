import { nanoid } from 'nanoid';
import mugiwara from '../../assets/dashboard-images/mugiwara.webp';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import checkboxFilled from '../../assets/dashboard-images/checkboxFilled.webp';
import checkbox from '../../assets/dashboard-images/checkbox.webp';
import heart from '../../assets/dashboard-images/heart.webp';
import share from '../../assets/share.webp';

const questionPageData = [
	{
		id: nanoid(),
		profilePicture: mugiwara,
		askName: 'mugiwara',
		userName: '@goodiesbuchi',
		time: '1hr',
		replying: 'Replying to @kayla_nicole',
		options,
		reply:
			'use a for-loop instead of lapply. Print the iterator. When the code breaks, run the code line by line (do not use %>%) to see where it fails. Then you can probably figure out what goes wrong. Apparently, there is a file that does not have LON and LAT',
		viewReplies: message,
		likes: heart,
		correct: checkboxFilled,
		share,
	},
	{
		id: nanoid(),
		profilePicture: mugiwara,
		askName: 'mugiwara',
		userName: '@goodiesbuchi',
		time: '1hr',
		replying: 'Replying to @kayla_nicole',
		options,
		reply:
			'use a for-loop instead of lapply. Print the iterator. When the code breaks, run the code line by line (do not use %>%) to see where it fails. Then you can probably figure out what goes wrong. Apparently, there is a file that does not have LON and LAT',
		viewReplies: message,
		likes: heart,
		correct: checkbox,
		share,
	},
];

export default questionPageData;
