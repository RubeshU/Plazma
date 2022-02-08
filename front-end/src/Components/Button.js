import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={styles.button_area} onClick={props.on_click}>
            <div>{props.text}</div>
        </div>
    );
}

export default Button;