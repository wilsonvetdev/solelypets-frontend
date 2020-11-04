export const setShelterInfo = (shelterInfo) => {
    return {
        type: 'SET_SHELTER_INFO',
        payload: shelterInfo
    }
}

export const addAnimal = (animalInfo) => {
    return {
        type: 'ADD_ANIMAL',
        payload: animalInfo
    }
}