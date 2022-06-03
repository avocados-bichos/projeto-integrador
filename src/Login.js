import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';

const Login = () => {

    require("./CadastroLogin.css");
    

    return (  

        <div className='login2 cadastroLogin'>


            <div className='login'>
                <h1>Seja bem vindo!</h1>
                <img src='Login.png'></img>
            </div>        

            <div className='login3'>
                <div className='caixa1'>
                    <h1 className="centro"><i className="fa-solid fa-paw"></i>Login</h1>
                    <hr/>
                    <p className="centro">Faça login para começar</p>

            
                    <form className='centro'>
                        <label>

                        <i className="fa-solid fa-unlock-keyhole"></i><input required minLength="5" type="text" placeholder="Digite o seu Usuário:"/>
                        <br/>
                        <br/>        
                        <i className="fa-solid fa-unlock-keyhole"></i><input autoComplete='username' required type="email" placeholder="Digite o seu Email:"/> 
                        <br/>
                        <br/>
                        <i className="fa-solid fa-key"></i><input autoComplete='current-password' required minLength="3" type="password" placeholder="Digite sua Senha:"/>                                             
                        <br/>
                        <br/>
                        <Link className='link' to="/" ><i className="fa-solid fa-arrow-left"></i> Voltar </Link>
                        <Link className='link' to="/perfil"> Entrar </Link>
                            
                        <hr/>

                        </label>
                    </form>    
                </div>  
            </div>

        </div>
    );
}
 
export default Login;