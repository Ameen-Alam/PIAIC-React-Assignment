import { RECIEVE_USERS } from '../actions/users'

export default function users(state = { name: 'Ameen' }, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}
