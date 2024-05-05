import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    children: any;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<Props> = ({ children, onClick, disabled }) => {
    return (
        <button onClick={onClick} className={styles.Button} disabled={disabled}>{children}</button>
    )
}

export default Button