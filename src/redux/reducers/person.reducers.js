 function PersonReducer(state = [], action) {
    switch(action.type) {
        case 'addPerson':
            const person = action.payload;
            //check if person already exists in store
            const found = state.some(value => person.athlete === value.athlete && person.event === value.event);
            let newState = [];
            if(!found) {
                newState = [...state, person];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removePerson':
            const filterPerson = action.payload
            const personRemoved = state.filter(value => value.name !== filterPerson.name)
            return personRemoved;

        default:
            return state;
    }
}

export default PersonReducer;