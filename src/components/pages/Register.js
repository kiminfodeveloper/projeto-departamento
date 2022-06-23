// import styles/components
import LinkButton from '../layouts/LinkButton'
import RegisterForm from '../RegisterForm/RegisterForm'
import styles from './Register.module.css'

// display
function Register() {
    return(
        <div className={styles.register_container}>
            <h1>Cadastre-se como um usuário</h1>
            <p>Faça o seu cadastro, rápido e simples.</p>
            <RegisterForm />

            <p>Caso queira ser um colaborador, clique aqui! Ou já possui cadastro!</p>
            <LinkButton to="/colab" text="Torne-se Colaborador" />
            <LinkButton to="/login" text="Login" />
        </div>
    ) 
}

export default Register