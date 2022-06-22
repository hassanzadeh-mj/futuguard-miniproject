import styles from '../styles/Home.module.css';


export default function header() {
    return (
        <>
            <footer className={styles.footer_container} >
                <div className={styles.footer_body}>
                    <div className={styles.footer_right}>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div>
                    <div className={styles.footer_left}>
                        <p className={styles.footer_links}>
                            <a href="#">Home</a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}