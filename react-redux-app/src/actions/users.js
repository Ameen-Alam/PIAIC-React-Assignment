export const RECIEVE_USERS = 'RECIEVE_USERS'

export function recieveUsers(users) {
    // with redux
    // return {
    //     type: RECIEVE_USERS,
    //     users,
    // }

    // with redux thunk
    return (dispatch) => {
        dispatch({
            type: RECIEVE_USERS,
            users,
        })
    }
}