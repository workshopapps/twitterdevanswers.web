import React from 'react';
import { Link } from 'react-scroll';
import classes from './styles.module.css';

function Hero() {
	return (
		<div className={classes.HeroCareer}>
			<div className={classes.Hero_nav}>
				<Link to="culture">
					<a href="#culture"> Culture </a>
				</Link>
				<Link to="value">
					<a href="#value"> Values </a>
				</Link>
				<Link to="benefits">
					<a href="#benefits"> Benefits </a>
				</Link>
				<Link to="open">
					<a href="#open"> Open Positions </a>
				</Link>
			</div>

			<div className={classes.mainly}>
				<main className={classes.main}>
					<h1>Join the world’s most creative problem solvers</h1>
					<p>
						At DevAsk, we will not only meet your career goals, but will equally
						make sure that you enjoy every step of the way. Join our
						ever-dynamic team today and be a part of this revolution in the
						world of technology.
					</p>
					<button type="button">Join Us</button>
				</main>
				<div className={classes.frame} />
			</div>

			<div className={classes.maintag}>
				<section>
					<h1>Join the world’s most creative problem solvers</h1>
				</section>
				<p>
					At DevAsk, we will not only meet your career goals, but will equally
					make sure that you enjoy every step of the way. Join our ever-dynamic
					team today and be a part of this revolution in the world of
					technology.
				</p>
				<button type="button">Join Us</button>
			</div>
		</div>
	);
}

export default Hero;
