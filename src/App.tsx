import CharityList from "./components/CharityList"
import FaqList from "./components/FaqList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modal from "./components/Modal"
import PaymentMethods from "./components/PaymentMethods"
import Title from "./components/Title"

function App() {
  return (
    <>
      <Header />

      <main>
        <Title />
        <CharityList />
        <PaymentMethods />
        <FaqList />
      </main>

      <Footer />

      <Modal />
    </>
  )
}

export default App
