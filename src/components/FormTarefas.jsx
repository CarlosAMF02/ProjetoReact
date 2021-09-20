import styled from 'styled-components'

const DivForm = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #993;

    form{width:50%; margin:auto;}
    form input, form textarea{
        padding: 5px; width: 80%;
    }
    form textarea{height:80%;}
    form button{padding:10px; background-color: #3c3; color:#fff}
`

const FormTarefas = props => {

    return(
        <DivForm>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input type="text" name="titulo" placeholder='Titulo'
                    value={props.tarefa.titulo}
                    onChange={props.digit}/>
                </div>
                <div>
                    <input type="text" name="setor" placeholder='Setor'
                    value={props.tarefa.setor}
                    onChange={props.digit}/>
                </div>
                <div>
                    <textarea name="descricao" placeholder="Descricao"
                    value={props.tarefa.descricao}
                    onChange={props.digit}/>
                </div>
                <button type='submit'>Adicionar</button>
            </form>
        </DivForm>
    )
}
export default FormTarefas