import React from 'react';
import {  Routes, Route, Link } from 'react-router-dom';

const Cadastro = ( ) => { 

    require("./Cadastro.css");


    return ( 

        <div>

            <div className='caixa2'>

                <br/>
    
                <h1><i className="fa-solid fa-dog"></i>Cadastro do Animal & Tutor:</h1>
                <p>Caso o animal seja porte grande ou silvestre, entre em contato:</p>
                <h4>(CASO O TUTOR JÁ TENHA O ANIMAL CADASTRADO, APENAS FAÇA O LOGIN)</h4>

                <hr/>

                <p className="centro"><i className="fa-solid fa-heart-pulse"></i>Informe os seus dados<i className="fa-solid fa-heart-pulse"></i></p>

                <form className='centro'>
                    <label>

                        <i className="fa-solid fa-user"></i><input required minLength="5" type="text" placeholder="Digite o nome do tutor:"/>
 
                        <br/>
                        <br/>

                        <i className="fa-solid fa-calendar-days"></i><input type="text" placeholder="Digite a sua data de nascimento:"/>

                        <br/>
                        <br/>

                        <i className="fa-solid fa-pen"></i><input required minLength="4" type="text" placeholder="Digite o nome para seu usuário:"/>
 
                        <br/>
                        <br/>
            
                        <i className="fa-solid fa-envelopes-bulk"></i> <input autoComplete='username' type="email" placeholder="Digite um email:"/>
            
                        <br/>
                        <br/>
                        
                        <i className="fa-solid fa-key"></i><input autoComplete='new-password' required minLength="8"  type="password" placeholder="Digite uma senha:"/>
            
                        <br/>
                        <br/>
            
                        <i className="fa-solid fa-key"></i><input autoComplete='new-password' required minLength="8" type="password" placeholder="confirme sua senha:"/>
            
                        <hr/>
                    </label>
                </form>

                <Link className='link' to="/"><i className="fa-solid fa-arrow-left-long"></i>Voltar</Link>
                <Link className='link' to="/perfil">Entrar</Link>  
    
                

            </div>
                    

            
    
        </div>

    );
}
 
export default Cadastro;