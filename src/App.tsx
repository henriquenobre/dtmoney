import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styyles/global";
import Modal from "react-modal";
import { useState } from "react";
import { ModalTransaction } from "./components/ModalTransaction";
import { TransactionsProvider } from "./TransactionsContext";


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <ModalTransaction isOpen={isNewTransactionOpen} handleCloseModal={handleCloseModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
