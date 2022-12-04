import React, {useState, useContext} from 'react'
import { nanoid } from 'nanoid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './submitblog.module.css';
import { AppContext } from '../../store/AppContext';

function SubmitBlog() {
    const navigate = useNavigate();
    const { state } = useContext(AppContext);
    const [isTokenError, setIsTokenError] = useState('');

    const [blogData, setBlogData] = useState({
        author: state.user.userName,
		user_id: state.user.user_id,
        blog_user_id: '',
		title: '',
		body: '',
        image_url: '',
        post_category: '',
	});
    const handleChange = (e) => {
		const { name, value } = e.target;

		setBlogData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));
    }
    const options = [
        {
            label: "Select Post Category",
            value: "post_category",
        },
        {
          label: "NFTs",
          value: "nfts",
        },
        {
          label: "Fitness/Health",
          value: "fitness-health",
        },
        {
          label: "Lifestyle",
          value: "lifestyle",
        },
        {
          label: "Programming",
          value: "programming",
        },
      ];

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
				`https://api.devask.hng.tech/blog/?user_id=${blogData.user_id}`,
				details,
				{
					headers,
				}
			);
			if (data) {
            setTimeout(() => {
                navigate('/blog-page');
            }, 3000);
			}
		} catch (err) {
            setIsTokenError('Cannot complete request now. Try again later...');
        }
    }

    const handleSubmit = (e) => {
		e.preventDefault();
		submitNewBlog();
	};

  return (
    <main className={styles.containerWrapper}>
        {isTokenError? alert(`${isTokenError}`)
            : ""
        }
        <section className={styles.container}>
           
            <form>
            <section className={styles.titleWrapper} id="content">
            <h2>Submit an Article</h2>
            <br/>
            <p>Your article will be reviwed before publishing. Make sure the article is your own.</p>
            <br/>
                <div>
                <h3>Author</h3>
                <input
                    type="text"
                    placeholder=""
                    value={blogData.author}
                    name="author"
                    onChange={handleChange}
                    disabled
                    />            
                </div>
            </section>
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
            <section className={styles.titleWrapper}>
                <div>
                <label htmlFor="post_category">
                    <h3>Post Category</h3>
                <select value="Select Post Category"
                        onChange={handleChange}
                        >
                    {options.map((option) => (
                    <option name="post_category"
                    value={option.value}
                    key={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                </label>
                </div>
            </section>

        <section className={styles.detailWrapper} id='blog'>
            <div className={styles.content}>
            <h3>Content</h3>
            <p>You are required to submit the link to your article in doc link format</p>
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