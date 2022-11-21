import React from 'react';
import './Advert.css';
import Devs from '../../components/Advert/img/Devs.png';
import Cn from '../../components/Advert/img/Cn.png';
import Css from '../../components/Advert/img/CSS.png';
import Figma from '../../components/Advert/img/Figma.png';
import Google from '../../components/Advert/img/Google.png';
import Html from '../../components/Advert/img/HTML5.png';

function Advert() {
	return (
		<div id="body-20234">
			<div id="secton1-20234">
				<div id="text-20234">
					<h1>
						You want to target <span id="blue-20234">developers </span> right?
					</h1>
					<p>
						{' '}
						If you want to target devlopers you are in the right place to post
						your ads. DevAsk puts your brand in the faces of thousands of
						developers to boost your ad conversion
					</p>
					<a id="btn-20234" href='/'> Get Started</a>
				</div>
				<div id="img-20234">
					<img src={Devs} alt="group of developers" />
				</div>
			</div>
			<div id="section2-20234">
				<h2>What can we do for you?</h2>
				<div id="cards-container-20234">
					<div id="cards-20234">
						<h3 id="cards-header-20234"> Build brand awareness</h3>
						<p id="cards-para-20234">
							Become popular in your niche and increase brand recognition,
							trustworthiness, and credibility.
						</p>
					</div>
					<div id="cards-20234">
						<h3 id="cards-header-20234">Target & convert lead</h3>
						<p id="cards-para-20234">
							Influence high-intent prospects searching for solutions during
							their consideration phase.
						</p>
					</div>
					<div id="cards-20234">
						<h3 id="cards-header-20234">Increase your website traffic</h3>
						<p id="cards-para-20234">
							Promote marketing content, drive traffic to your tech-related
							website, and boost conversions.
						</p>
					</div>
				</div>
				<a id="btn-20234" href='/'> Get Started</a>
			</div>

			<div id="section3-20234">
				<h2>Join other brands advertising on DevAsk </h2>
				<div id="logo-section-20234">
					<img src={Google} alt=" code tech" id="logo-el-20234" />
					<img src={Cn} alt=" code tech" id="logo-el-20234" />
					<img src={Figma} alt=" code tech" id="logo-el-20234" />
					<img src={Css} alt=" code tech" id="logo-el-20234" />
					<img src={Html} alt=" code tech" id="logo-el-20234" />
				</div>
			</div>
			<div id="section4-20234">
				<h2>Are you ready to get conversion? </h2>
				<p>Let us get you started </p>
				<a id="btn-20234" href='/'> Get Started</a>
			</div>
		</div>
	);
}

export default Advert;
