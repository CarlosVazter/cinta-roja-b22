import React, { Component } from 'react';
import Contador from './components/contador';

class App extends Component {
    state = { 
        contadores: ['Omega', 'Foxtrot', 'Psi']
     }
    render() { 
        return ( 
            <div>
                {this.state.contadores.map(contador => <Contador>{contador}</Contador>)}
            </div>
            
         );
    }
}
 
export default App;
