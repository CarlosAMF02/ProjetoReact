import { BrowserRouter, Switch, Route } from "react-router-dom"
import ListaTarefas from "./components/ListaTarefas"
import Menu from "./components/Menu"
import Home from "./components/Home"
 
 const App = ()=>{

    return(
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/tarefa' component={ListaTarefas}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App