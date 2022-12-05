import { nanoid } from 'nanoid';
import Avatar1 from '../../assets/team-images/avatar1.webp';
import Avatar2 from '../../assets/team-images/avatar2.webp';
import github from '../../assets/team-images/github.webp';
import twitter from '../../assets/team-images/twitter.webp';
import facebook from '../../assets/team-images/facebook.webp';
import linkedin from '../../assets/team-images/linkedin.webp';
import instagram from '../../assets/team-images/instagram.webp';

const teamData = [
	{
		id: nanoid(),
		picture: Avatar2,
		tag: 'Product Manager',
		name: 'Taiwo Ayodeji popoola',
		about: 'Supervises the marketing team project',
		contact: 'Contact me',
		socials: [github, twitter, facebook, linkedin, instagram],
	},
	{
		id: nanoid(),
		picture: Avatar2,
		tag: 'Ass-Project manager',
		name: 'Damilore Brown',
		about: 'Has high profile projects under his belt',
		contact: 'Contact me',
		socials: [github, twitter, facebook, linkedin, instagram],
	},
	{
		id: nanoid(),
		picture: Avatar1,
		tag: 'Marketing Team Lead',
		name: 'Mangoes',
		about: 'Delegates tasks to the marketers in our team',
		contact: 'Contact me',
		socials: [github, facebook, linkedin],
	},
	{
		id: nanoid(),
		picture: Avatar1,
		tag: 'CTO',
		name: 'Miracle Ufodinma',
		about:
			'Bridges the gap between technical team members and other members of the team',
		contact: 'Contact me',
		socials: [github, facebook, linkedin, instagram],
	},
	{
		id: nanoid(),
		picture: Avatar2,
		tag: 'Front-End Lead',
		name: 'Coded-Libra',
		about:
			'Organises the front-end technical team members towards the whole team goals',
		contact: 'Contact me',
		socials: [github, twitter, facebook, linkedin, instagram],
	},
	{
		id: nanoid(),
		picture: Avatar1,
		tag: 'Back-End Lead',
		name: 'Panda Grey',
		about:
			'African born Backend Developer, founder at catch them young, co-founder at DevAsk',
		contact: 'Contact me',
		socials: [github, twitter, facebook, linkedin, instagram],
	},
];

export default teamData;
