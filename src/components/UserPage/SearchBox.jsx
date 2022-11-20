import styles from "../../pages/UserPage/userPage.module.css";


import FilterBy from "./FilterBy";
const SearchBox = () => {
    return (
        <>
            <div className={styles.search_container}>


                <div className={styles.searchbox_container}>
                    <input className={styles.search_box} type="search" placeholder="Search for other great minds" />

                    <section className={styles.search_languages} >
                        <p>Django</p>
                        <p>Python</p>
                        <p>React</p>
                        <p>PHP</p>
                        <p>Panda</p>
                    </section>

                    <select className={styles.select_lang} name="lang" id="lang">
                        <option value="python">Python</option>
                        <option value="python">Django</option>
                        <option value="python">PHP</option>
                        <option value="python">React</option>
                        <option value="python">Panda</option>
                    </select>

                </div>

                <FilterBy />

            </div>
        </>
    );
}

export default SearchBox;