import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { addN, decrement, increment } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => decrement(dispatch)}> -2
                    </button>
                    <button className="btn"
                        onClick={() => increment(dispatch)}> +2
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'multiply' })}> *7
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divide' })}> /25
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'parseInt' })}> Int
                    </button>
                    <button className="btn"
                        onClick={() => addN(dispatch, 20)}> +20
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
