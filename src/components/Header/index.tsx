import Logo from "@/assets/Logo"
import styles from "./style.module.css"
import StoreButton from "@/ui/StoreButton"
import { IStore } from "@/types"

const Header = () => {
    const storeArray: IStore[] = ["appstore"]

    return (
        <header className={styles.Header}>
            <Logo />

            <div className={styles.Box}>
                {storeArray.map((item, index) => (
                    <StoreButton type={item} key={index} onClick={() => ({})} />
                ))}
            </div>
        </header>
    )
}

export default Header