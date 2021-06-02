import Esporte from './Esporte'

function ListaEsportes() {
    return (
        <>
            <Esporte
                modalidade="Modalidade"
                tipo="Tipo"
                distancia={1.3}
                sexo="Masculino"
                local="Japão"
            />
        </>
    )
}

export default ListaEsportes
