export const setUserInfo = (userInfo) => {
    return {
        type: 'SET_USER_INFO',
        payload: userInfo
    }
}

export const logOutUser = () => {
    return {
        type: 'LOGOUT'
    }
}