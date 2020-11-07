let initialState = {
    isShelter: true,
    first_name: '',
    last_name: '', 
    name: '', 
    email: '',
    full_address: '',
    token: '',
    animals: [],
    role: '',
    image: '',
    donations_received: 0
}

const shelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHELTER_INFO':
            return {
                ...state,
                first_name: action.payload.user.first_name,
                last_name: action.payload.user.last_name, 
                name: action.payload.user.name, 
                email: action.payload.user.email, 
                full_address: action.payload.user.full_address,
                token: action.payload.token,
                role: action.payload.role,
                donations_received: action.payload.user.donations_received,
                animals: action.payload.user.animals,
                image: action.payload.user.items[action.payload.user.items.length-1].image
            }
        case 'UPDATE_SHELTER_IMG':
            return {
                ...state,
                image: action.payload.image
            }
        case 'ADD_ANIMAL':
            return {
                ...state,
                animals: [
                    ...state.animals, 
                    {
                        id: action.payload.id,
                        capitalized_name: action.payload.capitalized_name,
                        capitalized_species: action.payload.capitalized_species,
                        description: action.payload.description
                    }
                ]
            }
        case 'DELETE_ANIMAL':
            let filteredAnimals = state.animals.filter(animal => animal.id !== action.payload.id)
            return {
                ...state,
                animals: filteredAnimals
            }
        case 'UPDATE_ANIMAL':
            let copyOfAnimals = state.animals.map(animal => {
                if(animal.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        capitalized_name: action.payload.capitalized_name,
                        capitalized_species: action.payload.capitalized_species,
                        description: action.payload.description,
                    }
                } else {
                    return animal
                }
            })
            return {
                ...state,
                animals: copyOfAnimals
            }
        default:
            return state
    }
}

export default shelterReducer