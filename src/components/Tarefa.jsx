import styled from "styled-components";
import { FaTrashAlt as X} from 'react-icons/fa'

const Tarefa = props=>{
    const DivTarefa = styled.div`
        background-color: #ffb;
        border: 2px solid #333;
        box-shadow: 5px 5px 5px #333;
        padding: 20px;
        text-align: center;
        width: 350px;
        height: 200px;
        margin: 10px;
        position: relative;
        h2,p{padding-bottom: 10px}
        button{position:absolute; top:10px; right:10px; font-size:1.2em; color:red}
    `
    return(
        <DivTarefa>
            <h2>{props.titulo}</h2>
            <p>Para: {props.setor}</p>
            <p>{props.descricao}</p>
            <button onClick={props.remove}><X/></button>
        </DivTarefa>
    )
}
export default Tarefa;