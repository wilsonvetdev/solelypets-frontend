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
    donations_received: 0,
    donations_count: 0,
    address: '',
    city: '',
    state: ''
}

const shelterReducer = (state = initialState, action) => {
    let copyOfAnimals;
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
                donations_count: action.payload.user.donations_count,
                animals: action.payload.user.animals,
                image: action.payload.user.items[action.payload.user.items.length-1].image,
                address: action.payload.user.address,
                city: action.payload.user.city,
                state: action.payload.user.state
            }
        case 'UPDATE_SHELTER_IMG':
            return {
                ...state,
                image: action.payload.item.image
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
                        description: action.payload.description,
                        items: action.payload.items
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
            copyOfAnimals = state.animals.map(animal => {
                if(animal.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        capitalized_name: action.payload.capitalized_name,
                        capitalized_species: action.payload.capitalized_species,
                        description: action.payload.description,
                        items: action.payload.items
                    }
                } else {
                    return animal
                }
            })
            return {
                ...state,
                animals: copyOfAnimals
            }
        case 'UPDATE_ANIMAL_IMG':
            copyOfAnimals = state.animals.map(animal => {
                if(animal.id === action.payload.item.animal_id) {
                    return {
                        ...animal,
                        items: [ ...animal.items, action.payload.item ]
                    }
                } else {
                    return animal
                }
            })
            return {
                ...state,
                animals: copyOfAnimals
            }
        case 'LOGOUT':
            return initialState
        case 'UPDATE_SHELTER_INFO':
            return {
                ...state,
                role: action.payload.role,
                token: action.payload.token,
                ...action.payload.user
            }
        default:
            return state
    }
}

export default shelterReducer