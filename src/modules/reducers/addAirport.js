const airportReducer = (state = [], action) => {
    if(action.type === 'ADD_AIRPORT') {
        return [...state, action.payload];
    }
    return state;
}

export default airportReducer;