import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import options from '../../assets/profile-images/options.png';
import reward from '../../assets/profile-images/reward.svg';
import like from '../../assets/profile-images/like.svg';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

function UserActivities() {
	return (
		<>
			<header className={styles.header}>
				<button type="button">Question</button>
				<button type="button">Replies</button>
				<button type="button" className={styles.active}>
					Likes
				</button>
				<button type="button">Rewards</button>
			</header>

			<section className={`${styles['section-questions']} ${styles.hidden}`}>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>
			</section>

			<section className={`${styles['section-replies']} ${styles.hidden}`}>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>

				<div className={styles.replies}>
					<div className={styles.thread}>
						{/* Question */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Why does the NoReverse match error pop up when I’m trying to
										marginate my django website?
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										I actually have no idea why this happens but i feel like if
										we all come together we can think of something that could
										work so i’m placing a bounty on this question thanks.
									</p>
								</Link>
								<div className={styles.tags}>
									<button type="button">Python</button>
								</div>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
									<span className={styles.reward}>
										<img src={dollarCircle} alt="" /> 1200token
									</span>
								</section>
							</div>
						</div>
						{/* Response 1 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Codedlibra</span> <span>@codedlibra</span>
											</h5>
										</Link>
										<p className={styles.time}>2 mins</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@ayemma_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										To start debugging it, you need to start by disecting the
										error message given you. NoReverseMatch at /my_url/, this is
										the url that your application is currently trying to access
										but it contains a url that cannot be matched.
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
						{/* Response 2 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Kayla Nicole</span> <span>@kayla_nicole </span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs </p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@codedlibra</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Thanks man🙏
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
					</div>

					<div className={styles.thread}>
						{/* Question */}

						{/* Response 1 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Olamipo Bamisayemi</span>{' '}
												<span>@olabami_dev</span>
											</h5>
										</Link>
										<p className={styles.time}>2 mins</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@ayemma_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Start by locating the code in your source relevant to the
										url that is currently being rendered- the url, the view, and
										any templates involved. In most cases, this will be the part
										of the code you’re currently developing.
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
						{/* Response 2 */}
						<div className={styles.cardContainer}>
							<Link to="profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Kayla Nicole</span> <span>@kayla_nicole </span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs </p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@olabami_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Thanks for helping. Will do that 🙏
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles['section-likes']} ${styles.hidden}`}>
				<img src={like} alt="heart emoji" />
				<p>You&apos;ve liked a total number of 800 posts</p>
			</section>

			<section className={`${styles['section-likes']} ${styles.hidde}`}>
				<img src={reward} alt="heart emoji" />
				<p>You’ve earned a total reward of 1,958 Tokens</p>
			</section>
		</>
	);
}

export default UserActivities;
