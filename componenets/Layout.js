import style from "./layout.module.css";


const layout = ({ children }) => {
    return <div className={style.containar}>{children}</div>;
}

export default layout;