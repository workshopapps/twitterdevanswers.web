import React from 'react';
import './Team.css';
import Meet from '../../components/Team/index';

function Teams() {
	return (
		<div className="body-10123">
			<div id="body-10234">
				<div id="first-10123">
					<div id="second-10123">
						<h1>
							Tech 101, A functional system, internet access and...
							<span id="bold-10123">DevAsk</span>
						</h1>
					</div>
					<p id="para-10123">
						We are a team of coders and designers passionate about seeing the
						glow return to your face when you finally resolve that week-old bug.
						Panda grey, Lee me A. Lone, and I were interns at HNGi9 and every
						time an error page comes up in our code, we wished there was some
						sort of textbook we could look up instead of spending hours combing
						through lines of code. We built DevAsk to help thousands like
						ourselves cut down the time spent debugging instead ship innovative
						products 10x better.
					</p>
					<div id="border-10123" />
					<Meet />
				</div>
			</div>
		</div>
	);
}

export default Teams;
