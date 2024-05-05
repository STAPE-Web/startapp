import CharityItem from "@/ui/CharityItem"
import styles from "./style.module.css"

const CharityList = () => {
    const data = [
        { price: 50, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo?" },
        { price: 100, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo?" },
        { price: 200, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo?" },
        { price: 0, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo?" },
    ]

    return (
        <section className={styles.CharityList}>
            {data.map((item, index) => (
                <CharityItem key={index} item={item} />
            ))}
        </section>
    )
}

export default CharityList