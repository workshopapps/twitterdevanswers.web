import React from 'react';
import ContainerCSS from './Privacy.module.css';

function Privacy() {
	return (
		<section className={ContainerCSS.container}>
			<h2>PRIVACY POLICY</h2>
			<p>
				{' '}
				Your privacy is important to us. It is DevAsk`&apos;`s policy to respect
				your privacy regarding any information we may collect from you across
				our website, DevAsk, and other sites we own and operate.
			</p>
			<p>
				{' '}
				We only ask for personal information when we truly need it to provide a
				service to you. We collect it by fair and lawful means, with your
				knowledge and consent. We also let you know why we’re collecting it and
				how it will be used.r We only retain collected information for as long
				as necessary to provide you with your requested service. What data we
				store, we’ll protect within commercially acceptable means to prevent
				loss and theft, as well as unauthorised access, disclosure, copying, use
				or modification.{' '}
			</p>
			<p>
				{' '}
				We don’t share any personally identifying information publicly or with
				third-parties, except when required to by law.u Our website may link to
				external sites that are not operated by us. Please be aware that we have
				no control over the content and practices of these sites, and cannot
				accept responsibility or liability for their respective privacy
				policies. You are free to refuse our request for your personal
				information, with the understanding that we may be unable to provide you
				with some of your desired services.{' '}
			</p>
			<p>
				{' '}
				Your continued use of our website will be regarded as acceptance of our
				practices around privacy and personal information. If you have any
				questions about how we handle user data and personal information, feel
				free to <a href="/conact">contact us.</a>{' '}
			</p>{' '}
			<h3> More Informationu </h3>{' '}
			<p>
				{' '}
				Hopefully that has clarified things for you and as was previously
				mentioned if there is something that you aren`&apos;`t sure whether you
				need or not it`&apos;`s usually safer to leave cookies enabled in case
				it does interact with one of the features you use on our site.{' '}
			</p>
			<p> This policy is effective as of Nov 2022. </p>
		</section>
	);
}

export default Privacy;
