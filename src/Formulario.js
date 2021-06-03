import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'

function Formulario() {
    const estadoInicialFormulario = {
        modalidade: '',
        tipo: '',
        distancia: 0,
        sexo: '',
        local: '',
    }

    const [dadosFormulario, setDadosFormulario] = useState(
        estadoInicialFormulario
    )

    const formularioInvalido = Object.keys(dadosFormulario).some(
        (campo) => !dadosFormulario[campo]
    )

    const definirValorCampo = (e, nomeCampo) =>
        setDadosFormulario((dadosFormulario) => ({
            ...dadosFormulario,
            [nomeCampo]: e.target.value,
        }))

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post('http://localhost:3001/esporte', dadosFormulario)
            .then(() => setDadosFormulario(estadoInicialFormulario))
            .catch(console.log)
    }

    return (
        <>
            <Form className="formulario" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Modalidade</Form.Label>
                    <Form.Control
                        placeholder="Modalidade"
                        value={dadosFormulario.modalidade}
                        onChange={(e) => definirValorCampo(e, 'modalidade')}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control
                        placeholder="Tipo"
                        value={dadosFormulario.tipo}
                        onChange={(e) => definirValorCampo(e, 'tipo')}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Distancia</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Distancia"
                        value={dadosFormulario.distancia}
                        onChange={(e) => definirValorCampo(e, 'distancia')}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control
                        as="select"
                        value={dadosFormulario.sexo}
                        onChange={(e) => definirValorCampo(e, 'sexo')}
                    >
                        <option>Selecione o sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Local</Form.Label>
                    <Form.Control
                        placeholder="Local"
                        value={dadosFormulario.local}
                        onChange={(e) => definirValorCampo(e, 'local')}
                    />
                </Form.Group>

                <Button type="submit" disabled={formularioInvalido}>
                    Adicionar
                </Button>
            </Form>
        </>
    )
}

export default Formulario
