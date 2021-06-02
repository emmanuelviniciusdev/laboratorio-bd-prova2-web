import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Formulario from './Formulario'
import ListaEsportes from './ListaEsportes'

function App() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h3 className="mb-3">Adicionar um esporte</h3>
                        <Formulario onSubmit={console.log} />
                    </Col>

                    <Col>
                        <h3 className="mb-3">Esportes adicionados</h3>
                        <ListaEsportes />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
