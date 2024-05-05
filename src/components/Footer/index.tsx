import Logo from "@/assets/Logo"
import { IStore } from "@/types"
import StoreButton from "@/ui/StoreButton"
import styles from "./style.module.css"

const Footer = () => {
    const storeArray: IStore[] = ["appstore", "google", "rustore"]

    return (
        <footer className={styles.Footer}>
            <div className={styles.Top}>
                <Logo className={styles.Logo} />

                <div className={styles.Box}>
                    {storeArray.map((item, index) => (
                        <StoreButton type={item} key={index} onClick={() => ({})} />
                    ))}
                </div>
            </div>

            <div className={styles.Copyright}>
                <p>© Copyright ООО «Старт ЭПП». 2023-2024</p>
            </div>
        </footer>
    )
}

export default Footer