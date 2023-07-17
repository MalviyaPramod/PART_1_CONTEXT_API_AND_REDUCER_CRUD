export default (state, action) => {

    switch (action.type) {

        case 'GET_DATA':
            return {
                ...state,
                Toatallist: action.payload
            }

        case 'EDIT_DATA':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
            }
        default:
            return state
    }
}