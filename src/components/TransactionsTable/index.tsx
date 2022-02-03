import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento site</td>
                        <td className="income">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="outcome">-R$1000,00</td>
                        <td>Casa</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}