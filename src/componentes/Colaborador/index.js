import './Colaborador.css'

const Colaborador = ({nome,cargo,imagemUrl,corPrimaria}) =>{
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corPrimaria}} >
                <img src={imagemUrl} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4> {nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}


export default Colaborador