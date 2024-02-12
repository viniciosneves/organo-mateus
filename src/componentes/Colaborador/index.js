import './Colaborador.css'

const Colaborador = ({nome,cargo,imagemUrl}) =>{
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
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