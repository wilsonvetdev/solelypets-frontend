export const setAnimalShelters = (animalShelters) => {
    return {
        type: 'SET_ANIMAL_SHELTERS',
        payload: animalShelters
    }
}

export const addShelter = (shelterInfo) => {
    return{
        type: 'ADD_ANIMAL_SHELTER',
        payload: shelterInfo
    }
}
