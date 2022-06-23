// import styles
import styles from './RegisterForm.module.css'

// display
const ColabForm = () => {
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
            <label>Cargo na empresa:</label><br />
            <input type="text" placeholder="Cargo empresa"/>
            </div>
            <div>
            <label>Setor da empresa:</label><br />
            <input type="text" placeholder="Setor empresa"/>
            </div>
            <div>
            <label>Telefone:</label><br />
            <input type="tel" placeholder="Telefone"/>
            </div>
            <div>
            <label>CEP:</label><br />
            <input type="text" id="cep" placeholder="CEP"/>
            </div>
            <div>
            <label>Endereço:</label><br />
            <input type="text" id="endereco" placeholder="Endereço"/>
            </div>
            <div>
            <label>Bairro:</label><br />
            <input type="text" id="bairro" placeholder="Bairro"/>
            </div>
            <div>   
            <label>Cidade:</label><br />
            <input type="text" id="cidade" placeholder="Cidade"/>
            </div>
            <div>
            <label>Estado:</label><br />
            <input type="text" id="estado" placeholder="Estado"/>
            </div>
            <div>
            <input type="submit" value="Cadastre-se" />
          </div>
      </form>
    </div>
  )
}

export default ColabForm