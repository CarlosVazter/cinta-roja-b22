import React, { Component } from 'react';

class Tarjeta extends Component {
    state = {
        nombre: 'Texto de prueba',
        url: "https://place-hold.it/286x180"
    }
    
    render() { 
        return ( 
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src= {this.state.url} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{this.state.nombre}.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
         );
    }
}


export default Tarjeta;