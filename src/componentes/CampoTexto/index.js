import './CampoTexto.css'


const CampoTexto = (props) =>{   

     const aoDigitado = (evento) =>{
     props.aoAlterado(evento.target.value)

     
    
    }
 //   const placeholderModificado = `${props.placeholder}...` 
        return(
            <div className="campo-texto">
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder=  { `Digite ${props.placeholder}...`}          
                />
            </div>
    )
}

export default CampoTexto;