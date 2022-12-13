import React from 'react';
import ContainerCSS from './Privacy.module.css';

function Privacy() {
	return (
		<section className={ContainerCSS.container}>
			
			<h2 className={ContainerCSS.MainHeader}>PRIVACY POLICY</h2>

			<p className={ContainerCSS.Contents}>
				Your privacy is important to us. It is DevAsk&apos;s policy to respect your privacy regarding any information we may collect from you across our website, DevAsk, and other sites we own and operate.
			</p>

			<p className={ContainerCSS.Contents}>
				We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
			</p>

			<p className={ContainerCSS.Contents}>
				We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.
				Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
				You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
			</p>

			<p className={ContainerCSS.Contents}>
				Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to <a className={ContainerCSS.link} href="/conact">contact us.</a>
			</p>

			<h3 className={ContainerCSS.SubHead}> More Information </h3>

			<p className={ContainerCSS.Contents}>
				Hopefully that has clarified things for you and as was previously
				mentioned if there is something that you aren&apos;t sure whether you
				need or not it&apos;s usually safer to leave cookies enabled in case
				it does interact with one of the features you use on our site.
			</p>

			<p className={ContainerCSS.Contents}> This policy is effective as of Nov 2022. </p>
			
		</section>
	);
}

export default Privacy;
