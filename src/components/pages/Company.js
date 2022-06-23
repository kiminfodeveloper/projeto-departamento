// import styles/components
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

//display
function Company() {
    return(
        <section className={styles.home_container}>
            <h1>Sobre Nós! <span>BitMaker</span></h1>
            <p>BitMaker é uma empresa virada ao Cliente que desenvolve novas oportunidades no mercado de modernas tecnologias de bolsa.
                A BitMaker considera todos os pormenores. Criando uma plataforma comercial do âmbito internacional, consideramos a prioridade de prestação dos serviços de correção da melhor qualidade e dos serviços acompanhantes da formação, análise e suporte aos clientes.
                Sabemos qual a importância da qualidade dos serviços prestados por corretoras para o sucesso comercial de um negociante. Por isso, o BitMaker aposta na qualidade dos serviços prestados e ampla escala de serviços intelectuais. Além disso, a corretora valoriza a importância da formação profissional de negociantes novatos, satisfazendo, ao mesmo tempo, as diversas necessidades de jogadores profissionais do mercado.
                BitMaker tem clientes em todo o mundo, garantindo as melhores condições de trabalho e assegurando o acesso efetivo aos mercados financeiros internacionais. O nosso trabalho com clientes é constituído na forma de um diálogo: queremos saber do que você precisa e quais suas dúvidas com relação ao funcionamento do BitMaker, e queremos ouvir isso diretamente de você.
                A nossa relação com clientes é absolutamente transparente, ao mesmo tempo em que o serviço de alta tecnologia proporciona a visão real dos mercados financeiros internacionais e a avaliação imparcial de todos os riscos. A empresa BitMaker está credenciada pela CROFR (Centro de Regulamento dos Mercados Financeiros), e todos os riscos dos clientes têm seguro de acordo com a legislação em vigor, transformando a nossa empresa em uma das corretoras mais seguras da Comunidade dos Estados Independentes. Tudo isso garante uma relação de confiança entre a empresa e os clientes mantendo o clima de investimento favorável.
            </p>
            <div>
            <LinkButton to="/" text="Home" />
            <LinkButton to="/calc" text="Calcule suas Férias!" />
            </div>
            <img src={savings} alt="BitMaker" />
        </section>
    ) 
}
export default Company