import React from 'react';
import BlogPost from '../../components/BlogPost';
import Button from '../../components/Button';
import amico from '../../images/amico.png';
import caretCircleRight from '../../images/caret_circle_right.svg';
import nftImage from '../../images/nft.png';
import rectangle from '../../images/rectangle.png';
import rectangle0 from '../../images/rectangle0.png';
import rectangle1 from '../../images/rectangle1.png';
import rectangle2 from '../../images/rectangle2.png';
import './styles.css';

function BlogPage() {
	const blogPosts = [
		{
			title: 'Top Programming Language Used For Blockchain Development',
			date: 'October 29, 2022',
			image: rectangle,
			link: '#link',
			imageAlt: 'Rectangular illustration',
		},
		{
			title: '10 React Development Tools That Will Make Your Life Easy',
			date: 'October 19, 2022',
			image: rectangle0,
			link: '#link',
			imageAlt: 'Rectangular illustration',
		},
		{
			title:
				'7 Beginner-Level Python Projects to Take Your Skills To The Next Level',
			date: 'October 19, 2022',
			image: rectangle1,
			link: '#link',
			imageAlt: 'Rectangular illustration',
		},
		{
			title: '8 Best Programming Languages For Maths 🥹',
			date: 'October 9, 2022',
			image: rectangle2,
			link: '#link',
			imageAlt: 'Rectangular illustration',
		},
	];

	return (
		<div className="blog-page">
			<div className="container">
				<div className="main-axis">
					{/* <!-- featured section --> */}
					<div
						className="main-axis lg-cross-axis align-items-flex-start"
						style={{ '--gap': '14px' }}
					>
						<h2 className="lg-d-none blog-page__featured-title">
							AI & MACHINE LANGUAGE
						</h2>

						<div>
							<img src={nftImage} alt="nft illustration" />
						</div>

						<div className="blog-page__featured-content main-axis">
							<div>
								<span className="blog-page__featured-tag">NFT’s</span>
							</div>
							<div className="main-axis" style={{ '--gap': '12px' }}>
								<div>
									<h2 className="blog-page__featured-main-title">
										NFT’s: Projected to Building The Next Digital Assets of The
										Future
									</h2>
								</div>

								<div>
									<p className="blog-post__body">
										NFT’s are being projected to be the next big didtal assets
										to take the world by storm. Learn how to take advantage.
									</p>
								</div>

								<div>
									<a
										className="cross-axis align-items-center blog-page__blog-post-read-more"
										style={{ '--gap': '17px' }}
										href="#read-article"
									>
										<span>Read article</span>
										<img src={caretCircleRight} alt="caret circle right icon" />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- latest stories section --> */}
					<div
						className="blog-page__latest main-axis"
						style={{ '--gap': '12px' }}
					>
						<h2 className="blog-page__section-title">Latest stories</h2>

						<div
							className="blog-page__posts"
							style={{ '--gap': '30px', '--md-gap': '24px' }}
						>
							{blogPosts.map((blogPost) => (
								<div key={blogPost.title}>
									<BlogPost
										title={blogPost.title}
										link={blogPost.link}
										image={blogPost.image}
										imageAlt={blogPost.imageAlt}
										date={blogPost.date}
									/>
								</div>
							))}
						</div>

						<div className="main-axis align-items-center">
							<Button component="a" href="#" className="button button--outline">
								Load More Pages
							</Button>
						</div>
					</div>

					{/* <!-- subscribe section --> */}
					<div className="main-axis" style={{ '--gap': '12px' }}>
						<div className="blog-page__hr" />

						<div className="cross-axis justify-content-space-between align-items-center">
							<div
								className="main-axis blog-page__subscribe-section"
								style={{ '--gap': '12px' }}
							>
								<h2 className="blog-page__section-title-large">
									Want update in your Inbox
								</h2>

								<div className="main-axis" style={{ '--gap': '18px' }}>
									<p>
										We share questions from our community, news and articles
										from our blogs every week, that gives you a chance of
										earning more
									</p>

									<div
										className="main-axis md-cross-axis align-items-center"
										style={{ '--gap': '24px', '--md-gap': '18px' }}
									>
										<div>
											<Button component="a" href="#" className="button">
												Previous Publications
											</Button>
										</div>

										<div>
											<Button
												component="a"
												href="#"
												className="button button--outline"
											>
												Subscribe to DevApps
											</Button>
										</div>

										<div>
											<Button
												component="a"
												href="#"
												className="button button--outline"
											>
												RSS Feed
											</Button>
										</div>
									</div>
								</div>
							</div>

							<div className="d-none lg-d-block">
								<img src={amico} alt="illustration" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogPage;
