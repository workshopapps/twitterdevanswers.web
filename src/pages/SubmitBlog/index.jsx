import React, {useState, useContext} from 'react'
import { nanoid } from 'nanoid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './submitBlog.module.css';
import { AppContext } from '../../store/AppContext';

function SubmitBlog() {
    const navigate = useNavigate();
  //  const [isTokenError, setIsTokenError] = useState('');
    const { state } = useContext(AppContext);
    const [blogData, setBlogData] = useState({
		id: '',
		title: '',
		content: '',
		email: '',
	});

    const handleChange = (e) => {
		const { name, value } = e.target;

		setBlogData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));

	};
    const Toast = () => {
        const x = document.getElementById("snackbar");
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
      }
      
   const submitNewBlog = async () => {
		const details = {
			owner_id: 2,
			blog_id: blogData.id,
			title: blogData.title,
			content: `${blogData.content}`,
			created_at: Date.now(),
			updated_at: Date.now(),
		};
        const headers = {
			Authorization: `Bearer ${state.token}`,
			'Content-Type': 'application/json',
		};
        try {
			const data = await axios.post(
				'https://pacific-peak-54505.herokuapp.com/blog',
				details,
				{
					headers,
				}
			);
			if (data) {
			//	setIsSuccessful(true);

				setTimeout(() => {
					navigate('/blog-page');
				}, 5000);
			}
		} catch (err) {
//			setIsTokenError('Cannot complete request now. Try again later...');
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
        <section className={styles.detailWrapper} id="detail">
			<div className={styles.content}>
            <h3>Full Name</h3>
            <input
				type="text"
				placeholder=""
				value={blogData.title}
				name="name"
				onChange={handleChange}
				disabled
				autoComplete
				/>            
            </div>
        </section>
        <section className={styles.detailWrapper} id="detail">
			<div className={styles.content}>
            <h3>Email</h3>
            <input
				type="text"
				placeholder=""
				value={blogData.title}
				name="email"
				onChange={handleChange}
				disabled
				autoComplete
				/>            
            </div>
        </section>
        <section className={styles.detailWrapper} id='content'>
            <div className={styles.content}>
            <textarea
                value={blogData.detail}
                name="content"
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
    </main>
  )
}

export default SubmitBlog