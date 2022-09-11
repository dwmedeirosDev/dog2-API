import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Botao = styled.button`
    margin: 30px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #00b4ff;
`

const Image = styled.img`
    width: 600px;
    height: 400px;
    object-fit: contain;
`

export default function Dog(){

    const [dog, setDog] = useState()

    function getDogs(){
        axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
            setDog(response.data.message)
        })
    }

    return(
        <Container> 
            <Botao onClick={() => {getDogs()}}>Clique aqui</Botao>
            <Image src={dog} alt/>
            <Link to='/'><Botao>Voltar ao Menu</Botao></Link>
        </Container>
    )
}
