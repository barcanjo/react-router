import React, { Component } from "react";
import "./App.css";
import MenuSuperior from "./componentes/MenuSuperior/MenuSuperior";
import Resumo from "./componentes/Resumo/Resumo";
import Consultas from "./componentes/Consultas/Consultas";
import Faturamento from './componentes/Faturamento/Faturamento';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <MenuSuperior />
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Resumo} />
                                <Route path="/consultas" component={Consultas} />
                                <Route path="/faturamento" component={Faturamento} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
