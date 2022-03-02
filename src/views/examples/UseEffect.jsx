import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calculateFactorial(num) {
    const number = parseInt(num)

    if (number < 0) return -1
    if (number === 0) return 1

    return calculateFactorial(number - 1) * number
}

function checkOddOrEven(num) {
    const number = parseInt(num)

    return number % 2 === 0 ? "Par" : "Ímpar"
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calculateFactorial(number))
    }, [number])

    const [oddOrEven, setOddOrEven] = useState("Ímpar")

    useEffect(() => {
        setOddOrEven(checkOddOrEven(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>

                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{oddOrEven}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
