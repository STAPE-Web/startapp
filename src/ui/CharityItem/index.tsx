import { ICharity } from "@/types"
import { FC, useState } from "react"
import Button from "@/ui/Button"
import styles from "./style.module.css"
import useGlobalStore from "@/store"

interface Props {
    item: ICharity
}

const CharityItem: FC<Props> = ({ item }) => {
    const [value, setValue] = useState("")
    const [active, setActive] = useState(false)
    const changePrice = useGlobalStore(state => state.changePrice)
    const changeModal = useGlobalStore(state => state.changeModal)

    function openModal() {
        if (value === "") {
            changePrice(String(item.price))
        } else {
            changePrice(value)
        }
        changeModal(true)
    }

    return (
        <div className={`${styles.CharityItem} ${item.price === 0 ? styles.Active : ""}`}>
            {active
                ? <div className={styles.Input}><input placeholder="500" type="number" onChange={e => setValue(e.target.value)} value={value} /><h3>₽</h3></div>
                : <>{item.price !== 0
                    ? <h3>{item.price} ₽</h3>
                    : <h3>Другая сумма</h3>
                }</>
            }

            <p>{item.text}</p>

            {item.price !== 0
                ? <Button onClick={() => openModal()}>Оплатить</Button>
                : active
                    ? <Button onClick={() => openModal()} disabled={value === "" || Number(value) <= 0}>Оплатить</Button>
                    : <Button onClick={() => setActive(true)}>Изменить</Button>
            }
        </div>
    )
}

export default CharityItem