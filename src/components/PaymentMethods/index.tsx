import Visa from "@/assets/Visa.png"
import Mastercard from "@/assets/Mastercard.png"
import Mir from "@/assets/Mir.png"
import styles from "./style.module.css"

const PaymentMethods = () => {
    const payments = [Visa, Mastercard, Mir]

    return (
        <section className={styles.PaymentMethods}>
            <h2>К оплате принимаются карты платежных систем:</h2>

            <div>
                {payments.map((item, index) => (
                    <img src={item} key={index} alt="" />
                ))}
            </div>
        </section>
    )
}

export default PaymentMethods