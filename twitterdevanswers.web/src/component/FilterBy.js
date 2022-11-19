import styles from "../pages/userPage/userPage.module.css";
const FiterBy = () => {
    return (

        <section className={styles.filter_options}>
            <p>Filter</p>
            <button>Stack</button>
            <button>Followers</button>
            <button>Job title</button>

        </section>

    );
}

export default FiterBy;