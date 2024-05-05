import { IFAQ } from "@/types"
import { FC, useState } from "react"
import { ArrowLeftIcon } from "../Icons"
import styles from "./style.module.css"

interface Props {
    item: IFAQ
}

const FaqItem: FC<Props> = ({ item }) => {
    const [active, setActive] = useState(false)

    return (
        <div className={`${styles.FaqItem} ${active ? styles.Active : ""}`} onClick={() => setActive(!active)}>
            <div className={styles.Top}>
                <h3>{item.question}</h3>
                <ArrowLeftIcon className={styles.Icon} />
            </div>

            <p>{item.text}</p>
        </div>
    )
}

export default FaqItem