import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const mergeString = (firstString, secondString) => {
    return [...firstString].map((e, i) =>
        `${e}${secondString[i] || ""}`
    ).join("")
}

const UseRef = (props) => {
    const [string1, setString1] = useState("")
    const [string2, setString2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current++
        myInput2.current.focus()
    }, [string1])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    }, [string2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergeString(string1, string2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={string1} onChange={e => setString1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={string2} onChange={e => setString2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
