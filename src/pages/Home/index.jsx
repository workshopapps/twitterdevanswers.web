import React, { useEffect, useState} from 'react';
import {Link }from 'react-router-dom';
import heroImage from '../../assets/landing-images/hero_image.png';
import styles from './styles.module.css';



function Home() {
	const slides =[
		{id:1,header:"Save Time Troubleshooting a Line of Code", parag: "We connect you with other front end developers to help debug that line of code in the shortest time possible.", btn: "Learn More", path: "/first-landing"},
		{id:2, header:"Get instant replies to technical questions.", parag: "DevAsk is a user friendly app that provides instant answers to all of your coding questions at your fingertips. Coding doesn't need to be hard, sign up for DevAsk and find solutions today!", btn: "Learn More", path: "/second-landing"},
		{id:3, header:"Get rewarded for providing solutions to questions", parag: "Devask helps you get answers to your technical questions immediately. You also get rewarded when you provide correct answers to questions.", btn: "Learn More", path:"/third-landing"}
	]
	const [currentIndex, setCurrentIndex]= useState(1)

	const goSlides = (id) => {
		setCurrentIndex(id)
	}

	useEffect(() =>{
		// console.log(currentIndex)
		setTimeout(() =>{
			goSlides(currentIndex)
		
			if(currentIndex >= 1 && currentIndex < 3){
				setCurrentIndex(prevState => prevState + 1)
			}else if(currentIndex >= 3 ){
				setCurrentIndex(1)
			}
        }, 3000)

	}, [currentIndex])
	

	return (
		<div className={styles.container}>
			<div className={styles.home} >
				<div className={styles.text}>
					<div className={styles.slide}>
						<h1>
							{slides[currentIndex-1].header}
						</h1>
						<p>
							{slides[currentIndex-1].parag}
						</p>
					</div>
					
					<Link to = {slides[currentIndex-1].path} className={styles.link}>
						<button className={styles.btn} type="submit">
							{slides[currentIndex-1].btn}
						</button>
					</Link>
					
					{/* The dots/circles */}
					{/* onClick={() => goSlides(slide.id)} */}
					
					<div className={styles.dotgroup}>
						{slides.map((slide) =>(<button type="button" key={slide.id} className={styles.dot} onClick={() => goSlides(slide.id)}>.</button>))}
					</div>
					
				</div>
			<div className={styles.img}>
				<img src={heroImage} alt="hero" />
			</div>
		</div>
		</div>
		
	);
}

export default Home;
