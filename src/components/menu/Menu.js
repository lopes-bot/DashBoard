import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';




export default class Menu extends Component {
    render() {
        return (
            <div>
                           
                <div className="menu">
                    
                    <ul className="nav flex-column dark">

                    <div className="link"><li className="nav-item"><Link to="/"  id="menuli">Gráficos </Link>  </li> </div> 
                    <div className="link"><li className="nav-item"><Link to="/tabela" id="menuli">Tabelas </Link> </li> </div> 
                    <div className="link"><li className="nav-item"><Link to="/card" id="menuli">Cards </Link>  </li> </div> 
                    <div className="link"><li className="nav-item"><Link to="/data" id="menuli">Dados </Link>  </li> </div> 
                    </ul>
                    
                </div>
                
            </div>
           
        )
    }
}
