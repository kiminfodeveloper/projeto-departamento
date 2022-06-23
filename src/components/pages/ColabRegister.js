// import styles/components
import styles from './Register.module.css'
import LinkButton from '../layouts/LinkButton'
import ColabForm from '../RegisterForm/ColabForm'

// display
function ColabRegister() {
    return(
        <div className={styles.register_container}>
            <h1>Cadastre-se como um colaborador!</h1>
            <p>Faça o seu cadastro, rápido e simples.</p>
            <ColabForm />
            <p>Já sou cadastrado!</p>
            <LinkButton to="/login" text="Login" />
        </div>
    ) 
}

export default ColabRegister