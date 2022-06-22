import Svgicon from '../src/Logo';
import styles from '../styles/Home.module.css';


export default function header() {
  return (
    <>
      <div className={styles.header_container}>
        <header className={styles.header}>
          <div className={styles.menu}>
            <div className={styles.menu_label} >فیوچگارد</div>
            <div className={styles.menu_item} ><span className={styles.menu_span}>ثبت نام</span></div>
            <div className={styles.menu_item}><span className={styles.menu_span}> میزکار</span></div>
            <div className={styles.menu_item} ><span className={styles.menu_span}>درباره ی ما</span></div>
          </div>
          <div className={styles.logo}>
            <Svgicon />
          </div>
        </header>
      </div>
    </>
  )
}