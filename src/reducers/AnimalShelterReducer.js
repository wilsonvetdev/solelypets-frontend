let initialState = {
    animalShelters: []
}

const animalShelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ANIMAL_SHELTERS':
            return {
                ...state,
                animalShelters: [ ...state.animalShelters, ...action.payload ]
            }
        default:
            return state
    }
}

export default animalShelterReducer