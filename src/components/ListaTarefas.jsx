import { useState } from "react";
import styled from "styled-components";
import FormTarefas from "./FormTarefas";
import Tarefa from "./Tarefa";


const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around;
`

const ListaTarefas = ()=>{

    const [tarefa,setTarefa] = useState([])
    const [nTarefa, SetNTarefa] = useState({
        titulo:'',
        setor:'',
        descricao:''
    })

    const addTarefa = e=>{
        e.preventDefault()
        setTarefa([...tarefa,nTarefa])
        SetNTarefa({titulo:'',setor:'',descricao:''})
    }

    const captura = e =>{
        const {value, name} = e.target

        if(name === 'titulo'){
            SetNTarefa({'titulo':value,'setor':nTarefa.setor,'descricao':nTarefa.descricao})
        } else if(name === 'setor'){
            SetNTarefa({'titulo':nTarefa.titulo,'setor':value,'descricao':nTarefa.descricao})
        } else if(name === 'descricao'){
            SetNTarefa({'titulo':nTarefa.titulo,'setor':nTarefa.setor,'descricao':value})
        }
    }

    const removerTarefa = tar=>{
        let lista = tarefa
        lista=lista.filter((t)=> t!==tar)
        setTarefa(lista)
    }

    return(
        <DivLista>
            <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} digit={captura}/>
            {
                tarefa.map((tar,i)=>(
                    <Tarefa
                        key={i}
                        titulo={tar.titulo}
                        setor={tar.setor}
                        descricao={tar.descricao} 
                        remove={removerTarefa.bind(this, tar)}//cria conexao com o objeto que vai ser removido
                    />
                ))}
        </DivLista>
    )
}
export default ListaTarefas;