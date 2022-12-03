import React, {useState, useContext} from 'react'
import { nanoid } from 'nanoid';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import styles from './submitblog.module.css';
import { AppContext } from '../../store/AppContext';

function SubmitBlog() {
  //  const navigate = useNavigate();
    // const [isTokenError, setIsTokenError] = useState('');
    const { state } = useContext(AppContext);
    // console.log(state)
    const [postCategories, setPostCategories] = useState([
		'NFTs',
		'Lifestyle',
		'Tech News',
		'Programming',
	]);

    const [blogData, setBlogData] = useState({
        author: state.user.userName,
		user_id: state.user.user_id,
        blog_user_id: '',
		title: '',
		body: '',
        image_url: '',
        post_category: `${postCategories}`,
	});
    const [isPostCatOpen, setIsPostCatOpen] = useState(false);
  
    const handlePostCategory = (postCat) => {
		setPostCategories(
			[
				'Java',
				'Python',
				'Android',
				'Php',
				'C++',
				'Ajax',
				'MYSQL',
			].filter((post) => post !== postCat)
		);
    }
    const handleChange = (e) => {
		const { name, value } = e.target;

		setBlogData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));
    }
	
    const Toast = () => {
        const x = document.getElementById("snackbar");
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
      }
      
   const submitNewBlog = async () => {
		const details = {
            author: blogData.author,
            user_id: blogData.user_id,
            blog_user_id: 2,
            title: blogData.title,
            body: blogData.body,
            image_url: 'https://devask-mallet.netlify.app/blog/nft-mobile.svg',
            post_category: blogData.post_category,
		};
        const headers = {
			Authorization: `Bearer ${state.token}`,
			'Content-Type': 'application/json',
		};
        try {
			const data = await axios.post(
				`https://pacific-peak-54505.herokuapp.com/blog/?user_id=${blogData.user_id}`,
				details,
				{
					headers,
				}
			);
			if (data) {
			//	setIsSuccessful(true);
                console.log(data)
			}
		} catch (err) {
            console.error(err)
		// setIsTokenError('Cannot complete request now. Try again later...');
		}
    }

    const handleSubmit = (e) => {
		e.preventDefault();
		submitNewBlog();
        Toast();
	};

  return (
    <main className={styles.containerWrapper}>
        <div id="snackbar">Blog Successfully Sent</div>

        <section className={styles.container}>
            <form>
            <section className={styles.titleWrapper} id="detail">
                <div>
                <h3>Title</h3>
                <input
                    type="text"
                    placeholder=""
                    value={blogData.title}
                    name="title"
                    onChange={handleChange}
                    required
                    />            
                </div>
            </section>
        <section className={styles.detailWrapper} id='blog'>
            <div className={styles.content}>
            <h3>Blog Content</h3>
            <textarea
                value={blogData.body}
                name="body"
                onChange={handleChange}
                minLength={20}
                required
                >
                *Placeholder*
            </textarea>
			</div>

        <section className={styles.postsWrapper}>
			<div className={styles.postsContent}>
				<span className={styles.text}>Post Category </span>

					<button
						type="button"
						onClick={() => setIsPostCatOpen(!isPostCatOpen)}
						className={styles.tagsButton}
                        >
									<img src="/post-question/down-arrow.svg" alt="Down Arrow" />
								</button>

								{isPostCatOpen && (
									<div className={styles.postsWrapper}>
										{isPostCatOpen &&
											postCategories.map((postCategory) => (
												<button
													key={postCategory}
													type="button"
													onClick={() => handlePostCategory(postCategory)}
												>
													{postCategory}
												</button>
											))}
									</div>
                                )}
                </div>
            </section>
        </section>
                            
        <section className={styles.buttonWrapper}>
			<div>
			<button
			    className={styles.review}
				type="submit"
				onClick={handleSubmit}>
					Submit
			</button>

			<button className={styles.discard} type="button">
				Discard draft
			</button>

			</div>
		</section>
        </form>
        </section>
    </main>
  )
}

export default SubmitBlog