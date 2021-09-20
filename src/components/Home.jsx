import styled from "styled-components";

const DivHome = styled.div`
    width: 100%;
    height: 85vh;
    background-color: #bbf;
    h1, p{padding:20px;}
`
const Home = ()=>{

    return(
        <DivHome>
            <h1>Pagina Principal do Projeto</h1>
            <p>Projeto para controlar tarefas</p>
        </DivHome>
    )
}
export default Home;