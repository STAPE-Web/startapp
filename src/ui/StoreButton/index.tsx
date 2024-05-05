import AppStore from "@/assets/AppStore"
import GoogleStore from "@/assets/GoogleStore"
import RuStore from "@/assets/RuStore"
import { IStore } from "@/types"
import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    onClick: () => void
    type: IStore
}

const StoreButton: FC<Props> = ({ onClick, type }) => {
    function fillContent() {
        switch (type) {
            case "appstore": return <AppStore />;
            case "google": return <GoogleStore />;
            case "rustore": return <RuStore />;
        }
    }

    return (
        <button onClick={onClick} className={styles.Button}>
            {fillContent()}
        </button>
    )
}

export default StoreButton