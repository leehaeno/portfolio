// import { headerNav } from '@/constants';
import { Link } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

const CommonHeader = () => {
    return (
        <header id="header" className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__inner__list}>
                    <ul>
                        <li><Link to="/">INDEX</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/work">WORK</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div className={styles.header__inner__icon}>
                    <img src="/images/menu_icon.svg" alt="" />
                </div>
             </div>
        </header>
    );
};

export { CommonHeader };