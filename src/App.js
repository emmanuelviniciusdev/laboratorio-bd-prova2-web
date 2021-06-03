import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Formulario from './Formulario'
import TabelaEsportes from './TabelaEsportes'

function App() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={5}>
                        <h3 className="mb-3">Adicionar um esporte</h3>
                        <Formulario />
                    </Col>

                    <Col>
                        <TabelaEsportes />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
