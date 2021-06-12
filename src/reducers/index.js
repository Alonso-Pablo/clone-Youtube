const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADD_QUEUE':
            return {
                ...state,
                queueList: [...state.queueList, action.payload ],
            }
        case 'DELETE_FROM_QUEUE':
            return {
                ...state,
                queueList: [...state.queueList.filter(item => item.id !== action.payload)]
            }
        case 'SET_ACCOUNT':
            return {
                ...state,
                totalUsers: state.idGenerator += 1,
                users: [
                    ...state.users,
                    {
                        id: state.totalUsers,
                        user: action.payload 
                    }
                ]
            }
        case 'GET_ACCOUNT':
            return {
                ...state,
                isLogged: true,
                userLogged: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isLogged: false,
                userLogged: action.payload
            }
        default:
            return state;
    }
}

export default reducer;