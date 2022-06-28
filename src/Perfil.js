import React, { useState } from 'react';
import Rodape from './Rodape';
import Modal from 'react-modal';
import Agenda from './Agenda';

Modal.setAppElement('#root')

const Perfil = (props) => {

    const [animais, alteraAnimais] = React.useState([]);

    React.useEffect( () => {
       

        Buscapets()

    }, [])

    const Buscapets = () =>{
        const axios = require ("axios").default;

        const id_usuario = localStorage.getItem('id_usuario');
        axios.get('http://localhost:3001/animais/'+ id_usuario)
        .then(function (response) {
                
        const dados = response.data;
        console.log (dados)
        alteraAnimais (dados)
        })
        .catch(function (error) {
        console.log(error);
        })
    }

const CadastrarPet = (e) =>{

    console.log("teste")

    e.preventDefault();

    const nome = document.querySelector("input[name='nome']").value;
    const especie = document.querySelector("input[name='especie']").value;
    const raca = document.querySelector("input[name='raca']").value;
    const porte = document.querySelector("input[name='porte']").value;

    const obj = {

        id_usuario: localStorage.getItem('id_usuario'),
        nome: nome,
        especie: especie,
        raca: raca,
        porte:porte
    }

    const axios = require ("axios").default;

    axios.post('http://localhost:3001/CadastrarPet', obj)
        .then(function (response) {
             
            console.log (response) 
            CloseModal()
            Buscapets()

        })
        .catch(function (error) {
        console.log(error);
        })



}

const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 6));
  };

    //MODAIS

    const [modalIsOpen, setIsOpen] = useState(false)

    function OpenModal (){
        setIsOpen(true)
    }

    function CloseModal (){
        setIsOpen(false)
    }

    const [abrirModal2, modalAberto2] = useState(false)

    function AbrirModal2 (){
        modalAberto2 (true)
    }

    function FecharModal2 (){
        modalAberto2 (false)
    }


    const nome = props.nome

    require("./Perfil.css");

    const fotouser = [

        {
            foto: "pet.png",
        },

        {
            foto: "pet1.png",
        },


        {
            foto: "pet2.png",
        },

        {
            foto: "pet3.png",
        },

        {
            foto: "pet4.png",
        },

        {
            foto: "pet5.png",
        },

        {
            foto: "pet6.png",
        },

        
    ]

    const customStyles = {
        content: {
          left: '35%',
          background: 'transparent',
          border: 'none'
        },
      };
      


    return (  

        <div className='perfil'>
            <div className='fundo'></div>
            <div><img className='fotoU' src={fotouser[num].foto}/></div>
            <div className='carregar'><img src='recarregar.png' onClick={handleClick}/></div>
            <h1 className='textosPer'>Sara Silva</h1>

            <div className='titulos'>
                <h3>Pets</h3>
                <h3 className='titulo1'>Agenda</h3>
            </div>
            <div className='alinhamento'>
                <div className='Pets'>
                        <h1>Cadastro de Pets</h1>
                

                    {
                        animais == 0 ? <p> Carregando...</p> : 
                        <div>
                            {animais.map (u => {
                                return(
                                    <>  <br/>

                                        <hr/>
                                        <p>Nome: {u.nome}</p>
                                        <p>Espécie: {u.especie}</p>
                                        <p>Raça: {u.raca}</p>
                                        <p>Porte: {u.porte}</p>                                                               
                                        <hr/>

                                    </>
                                )
                            })}
                        </div>
                    }
            </div>
               

                <div className='Pets'>
                
                <table cellpadding="10" cellspacing="4">
            <th>Pet</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Serviço</th>
            <tr/>
            
                <td>Tosa</td>
                <td>dhg</td>
                <td>shfs</td>
                <td>bgjfr</td>
                
            </table>
                       
                        
                </div>
            </div>
            

                <div className='add' onClick={OpenModal}><img src='add.png'></img></div>
                <div className='agenda' ><img onClick={AbrirModal2} src='agenda.png'  /></div>
                <br/>
                <br/>
                <br/>
                

                <Modal
                isOpen = {modalIsOpen}
                onRequestClose = {CloseModal}
                style = {customStyles}
                >
                    
                    <h1> Adicionar pet </h1>
                    <p>Nome do animal:</p><input name='nome' className='inputPerfil'></input>
                    <p>Espécie:</p><input name='especie' className='inputPerfil'></input>
                    <p>Raça:</p><input name='raca' className='inputPerfil'></input>
                    <p>Porte:</p><input name='porte' className='inputPerfil'></input>
                     <br/><br/>
                    <button onClick={CloseModal}>Voltar</button>
                    <button onClick={CadastrarPet}>Finalizar</button>
                    
                </Modal>


                <Modal
                isOpen = {abrirModal2}
                onRequestClose = {FecharModal2}
                style = {customStyles}
                
                >
                    <Agenda/>
                </Modal>


                <Rodape/>
        </div>        

    );
};
 
export default Perfil;