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
        post_category: 'NFTs',
	});
  

    const handleChange = (e) => {
		const { name, value } = e.target;

		setBlogData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));
    }
	
    // function Toast() {
    //     const x = document.getElementById("snackbar");
    //     x.className = "show";
    //     // After 3 seconds, remove the show class from DIV
    //     setTimeout(()=> { x.className = x.className.replace("show", ""); }, 3000);
    //   }
      
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
            <h5>You are required to signup to enable you submit an article</h5>
                <div>
                <h3>Name*</h3>
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
                <h3>Title*</h3>
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
            <h3>Content*</h3>
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