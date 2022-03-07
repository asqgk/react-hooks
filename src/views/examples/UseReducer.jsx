import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, number: state.number + 2 };
        case 'decrement':
            return { ...state, number: state.number - 2 };
        case 'multiply':
            return { ...state, number: state.number * 7 };
        case 'divide':
            return { ...state, number: state.number / 25 };
        case 'parseInt':
            return { ...state, number: parseInt(state.number) };
        case 'addN':
            return { ...state, number: state.number + action.payload };
        default:
            throw new Error();
    }
}

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
                        onClick={() => dispatch({ type: 'decrement' })}> -2
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'increment' })}> +2
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
                        onClick={() => dispatch({ type: 'addN', payload: 20 })}> +20
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
