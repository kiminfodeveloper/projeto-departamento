// import styles/components
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

// display
function Contact() {
    return(
        <section className={styles.home_container}>
            <h1>Entre em contato com: <span>BitMaker</span></h1>
            <h1><span>Nosso Contato</span></h1>
            <p>N° Telefone: 11 4002-8922 </p>
            <p>Email: contact.bitmaker@bitmaker.com.br</p>
            <p>Whatsapp: 11 9 9854-0063</p>
            <p>Instagram: @bitmaker.oficial</p>
            <p>Facebook: BitMaker Oficial</p>
            <p>LinkedIn: BitMakerOfc</p>
            <LinkButton to="/" text="Home" />
            <img src={savings} alt="BitMaker" />
        </section>
    ) 
}

export default Contact