import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

export function Header() {
    const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

    function handleOpenModal(){
        setIsNewTransactionOpen(true)
    }

    function handleCloseModal(){
        setIsNewTransactionOpen(false)
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="" />
                <button onClick={handleOpenModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}