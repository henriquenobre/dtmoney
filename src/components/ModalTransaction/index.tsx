import Modal from "react-modal";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export function ModalTransaction({ isOpen, handleCloseModal }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
