import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Botao = styled.button`
    margin-top: 30px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #00b4ff;
`

export default function Home(){
    return(
        <Container>
            <h1>Seja Bem Vindo ao DogPage</h1>
            <Link to='/dogpage'><Botao>Gerador de Imagens</Botao></Link>
        </Container>
    )
}