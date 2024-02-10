import './ListaSuspensa.css'


const ListaSuspensa = (props) =>{

    const onSelecionado =(evento) =>{
        props.aoAlterado(evento.target.value)

    }

    return (
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select 
                required={props.required}
                value={props.Valor}
                onChange={onSelecionado}            >                
                    {props.itens.map(item => <option key={item}>{item} </option>)}               
            </select>
        </div>

    )
}


export default ListaSuspensa