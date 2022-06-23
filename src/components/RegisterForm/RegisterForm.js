// import styles
import styles from './RegisterForm.module.css'

// display
const RegisterForm = () => {
  return (
    <div>
      <form className={styles.form_control}>
          <div>
            <label>E-mail:</label><br />
            <input type="e-mail" placeholder="Digite seu email"/>
            </div>
            <div>
            <label>Nome completo:</label><br />
            <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
            <label>Senha:</label><br />
            <input type="password" placeholder="Digite sua senha"/>
            </div>
            <div>
            <label>Repita a senha:</label><br />
            <input type="password" placeholder="Repita a senha"/>
            </div>
            <div>
            <input type="submit" value="Cadastre-se" />
          </div>
      </form>
    </div>
  )
}

export default RegisterForm