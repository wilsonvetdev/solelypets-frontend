let initialState = {
    first_name: '',
    last_name: '', 
    name: '', 
    email: '',
    address: '',
    city: '',
    token: '',
    animals: []
}

const shelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHELTER_INFO':
            // {id: 7, first_name: "Carol ", last_name: "Baskin", name: "Tiger Sanctuary", email: "carol@email.com", …}
            // address: "321 street"
            // city: "Brooklyn"
            // email: "carol@email.com"
            // first_name: "Carol "
            // id: 7
            // last_name: "Baskin"
            // name: "Tiger Sanctuary"
            // state: "New York"
            return {
                ...state,
                first_name: action.payload.animal_shelter.first_name,
                last_name: action.payload.animal_shelter.last_name, 
                name: action.payload.animal_shelter.name, 
                email: action.payload.animal_shelter.email, 
                address: action.payload.animal_shelter.address, 
                city: action.payload.animal_shelter.city,
                state: action.payload.animal_shelter.state,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default shelterReducer