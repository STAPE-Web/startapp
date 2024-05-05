import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    value: string
    type: "tel" | "email" | "text"
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = (props) => {
    return (
        <input {...props} className={styles.Input} />
    )
}

export default Input