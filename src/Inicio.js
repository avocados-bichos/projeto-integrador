import React from 'react';
import Menu from './Menu';
import Rodape from './Rodape';

const Inicio = () => {

    require ("./Inicio.css")
    return ( 

        <div className='painel'>
            <Menu/>
            <div className='titulo'>
                <h1 className='painel1'>Cuide do seu <br/>melhor amigo!</h1> 
                <p className='painel2'>Nossa clinica é especializada em consulta veterinária, <br/>cuidado com o seu pet e em vacinação.</p> 
            </div>

            <div>
                <img width='500px' src='Fotopainel.png'/>
            </div>

            <Rodape/>
        </div>
    );
}
 
export default Inicio;