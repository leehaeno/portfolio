import { Link } from 'react-router-dom';

// style
import styles from './ButtonComponents.module.scss';

const Button = ({children, type="button", href, color, onClick}) => {

    const classNames = [
        styles.button,
        styles[color],
    ].filter(Boolean).join(" ");

    if (href) {
        return (
            <Link
                to={href}
                className={classNames}
            >
                <div className={styles.button__box}>
                    <p className={styles.button__box__text}> 
                        <span>{children}</span>
                        <span>{children}</span>
                    </p>
                </div> 
                <div className={styles.button__bg}>
                    <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                </div>
            </Link>
        );
    }

    return (
        <button
            type={type} 
            className={classNames}
            onClick={onClick}
        >
            <div className={styles.button__box}>
                <p className={styles.button__box__text}> 
                    <span>{children}</span>
                    <span>{children}</span>
                </p>
            </div> 
            <div className={styles.button__bg}>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                </svg>
            </div>
        </button>
    );
};

export { Button };