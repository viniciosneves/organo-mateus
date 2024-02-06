import './Formulario.css'
import CampoTexto from '../../componentes/CampoTexto';

const Formulario = () =>{
    return(
        <section className='formulario'>
            <form>
                <h2> Preencha os Dados para Criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="seu nome" />
            <CampoTexto label="Cargo" placeholder="seu cargo"/>
            <CampoTexto label="Imagem" placeholder="o endereço do sua iamgem"/>
            </form>
        </section>
    )
}

export default Formulario;