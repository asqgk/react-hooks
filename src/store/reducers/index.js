export function reducer(state, action) {
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