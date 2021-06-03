import axios from 'axios'
import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function TabelaEsportes() {
    const [esportes, setEsportes] = useState([])

    const adicionarCincoPrimeirosEsportes = () => {
        axios
            .post('http://localhost:3001/cadastrar-os-5-primeiros-esportes')
            .catch(console.log)
    }

    /**
     * Atualiza a lista de esportes a cada 2 segundos.
     */
    useEffect(() => {
        setInterval(() => {
            axios
                .get('http://localhost:3001/esportes')
                .then((res) => setEsportes(res.data))
                .catch(console.log)
        }, 2000)
    }, [])

    return (
        <>
            {esportes.length === 0 && (
                <Alert variant="warning">
                    <Alert.Heading>Nenhum esporte encontrado.</Alert.Heading>
                    <hr />
                    <Button
                        variant="warning"
                        onClick={adicionarCincoPrimeirosEsportes}
                    >
                        Adicionar os 5 primeiros esportes
                    </Button>
                </Alert>
            )}

            {esportes.length > 0 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modalidade</th>
                            <th>Tipo</th>
                            <th>Distância</th>
                            <th>Sexo</th>
                            <th>Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        {esportes.map((esporte, index) => (
                            <tr key={index}>
                                <td>{esporte.id}</td>
                                <td>{esporte.modalidade}</td>
                                <td>{esporte.tipo}</td>
                                <td>{esporte.distancia}</td>
                                <td>{esporte.sexo}</td>
                                <td>{esporte.local}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default TabelaEsportes
