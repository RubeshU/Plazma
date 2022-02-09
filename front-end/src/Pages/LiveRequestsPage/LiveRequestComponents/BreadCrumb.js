import styles from "./BreadCrumb.module.css";

const BreadCrumb = (props) => {
    return (
        <div className={`${styles.image}`}>
            <div className={styles.text_section}>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
}

export default BreadCrumb;