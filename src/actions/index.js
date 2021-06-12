export const setAddQueue = payload => (
    {
        type: 'SET_ADD_QUEUE',
        payload,
    }
);

export const deleteFromQueue = payload => (
    {
        type: 'DELETE_FROM_QUEUE',
        payload,
    }
);

export const setAccount = payload => (
    {
        type: 'SET_ACCOUNT',
        payload,
    }
)

export const signOut = payload => (
    {
        type: 'SIGN_OUT',
        payload,
    }
)

export const getAccount = payload => (
    {
        type: 'GET_ACCOUNT',
        payload,
    }
)
