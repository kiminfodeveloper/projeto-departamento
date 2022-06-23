// import styles/components
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

// display
function Navbar () {
    return (
    <nav className={styles.navbar}>
        <Link to="/"><img src={logo} alt="BitMaker" /></Link>
        <Container>
          <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
            <Link to="Company">Sobre nós!</Link>
            </li>
            <li className={styles.item}>
            <Link to="Contact">Contatos</Link>
            </li>
            <li className={styles.item}>
            <Link to="Register">Login/Cadastro</Link>
            </li>
            <li className={styles.item}>
            <Link to="Calc">Calculos</Link>
            </li>
          </ul>
        </Container>
    </nav>
    )
}

export default Navbar