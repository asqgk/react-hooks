import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackBottons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback((delta) => {
        return setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackBottons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
