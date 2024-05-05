import FaqItem from "@/ui/FaqItem"
import styles from "./style.module.css"

const FaqList = () => {
    const data = [
        { question: "Вопрос #1", text: "Lorem ipsum dolor sit amet consectetur. Fermentum fusce pharetra facilisi facilisis. Condimentum ultricies lacinia sagittis amet ut ornare ac vel. Vitae ac sit adipiscing pharetra donec integer neque dolor augue. Nunc tortor amet malesuada fermentum." },
        { question: "Вопрос #2", text: "Lorem ipsum dolor sit amet consectetur. Fermentum fusce pharetra facilisi facilisis. Condimentum ultricies lacinia sagittis amet ut ornare ac vel. Vitae ac sit adipiscing pharetra donec integer neque dolor augue. Nunc tortor amet malesuada fermentum." },
        { question: "Вопрос #3", text: "Lorem ipsum dolor sit amet consectetur. Fermentum fusce pharetra facilisi facilisis. Condimentum ultricies lacinia sagittis amet ut ornare ac vel. Vitae ac sit adipiscing pharetra donec integer neque dolor augue. Nunc tortor amet malesuada fermentum." },
        { question: "Вопрос #4", text: "Lorem ipsum dolor sit amet consectetur. Fermentum fusce pharetra facilisi facilisis. Condimentum ultricies lacinia sagittis amet ut ornare ac vel. Vitae ac sit adipiscing pharetra donec integer neque dolor augue. Nunc tortor amet malesuada fermentum." },
        { question: "Вопрос #5", text: "Lorem ipsum dolor sit amet consectetur. Fermentum fusce pharetra facilisi facilisis. Condimentum ultricies lacinia sagittis amet ut ornare ac vel. Vitae ac sit adipiscing pharetra donec integer neque dolor augue. Nunc tortor amet malesuada fermentum." },
    ]

    return (
        <section className={styles.FaqList}>
            <h2>Часто задаваемые вопросы</h2>

            <div className={styles.Box}>
                {data.map((item, index) => (
                    <FaqItem key={index} item={item} />
                ))}
            </div>
        </section>
    )
}

export default FaqList