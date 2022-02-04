import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

interface HeaderProps {
    handleOpenModal: () => void;
}

export function Header({ handleOpenModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
