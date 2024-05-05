import useGlobalStore from "@/store"
import styles from "./style.module.css"
import Button from "@/ui/Button"
import Input from "@/ui/Input"
import { useState } from "react"
import { CloseIcon } from "@/ui/Icons"

const Modal = () => {
    const modal = useGlobalStore(state => state.modal)
    const price = useGlobalStore(state => state.price)
    const changeModal = useGlobalStore(state => state.changeModal)
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            {modal && <div className={styles.Modal}>
                <div className={styles.Box}>
                    <div className={styles.Top}>
                        <h2>Пожертвовать <span>{price} ₽</span></h2>
                        <CloseIcon onClick={() => changeModal(false)} />
                    </div>

                    <Input onChange={e => setPhone(e.target.value)} placeholder="Номер телефона" type="tel" value={phone} />
                    <Input onChange={e => setUsername(e.target.value)} placeholder="Ваше имя" type="text" value={username} />
                    <Input onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
                    <Button onClick={() => ({})} disabled={phone === "" || username === "" || email === ""}>Перейти к оплате</Button>
                </div>
            </div>}
        </>
    )
}

export default Modal