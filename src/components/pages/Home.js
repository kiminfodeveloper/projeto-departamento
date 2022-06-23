// import styles/components
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

// display
function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>BitMaker</span></h1>
            <p>Venha fazer parte da maior rede de compra e vendas de ações, criptos do Brasil!</p>
            <LinkButton to="/company" text="Sobre nós!" />
            <img src={savings} alt="BitMaker" />
        </section>
    ) 
}

export default Home