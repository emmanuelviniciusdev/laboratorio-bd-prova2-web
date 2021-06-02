import Alert from 'react-bootstrap/Alert'

function Esporte({ modalidade, tipo, distancia, sexo, local }) {
    return (
        <>
            <Alert variant="secondary" className="esporte">
                <p>
                    <b>Modalidade:</b> {modalidade}
                </p>
                <p>
                    <b>Tipo:</b> {tipo}
                </p>
                <p>
                    <b>Distância:</b> {distancia}
                </p>
                <p>
                    <b>Sexo:</b> {sexo}
                </p>
                <p>
                    <b>Local:</b> {local}
                </p>
            </Alert>
        </>
    )
}

export default Esporte
